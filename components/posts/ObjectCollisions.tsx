import { BlockCode, InlineCode } from "@/components/ui/Code";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import LineChart from "@/components/ui/LineChart";
import CounterDemo from "@/components/demos/CounterDemo";
import LoadWrapper from "@/components/LoadWrapper";
import BlockQuote from "@/components/ui/BlockQuote";
import Figure from "@/components/ui/Figure";
import { Ul, Ol, Li } from "@/components/ui/List";
import InlineLink from "@/components/ui/InlineLink";
import { H2, H3 } from "@/components/ui/Headings";
import ExecuteAnimationScript from "@/components/ui/ExecuteAnimationScript";

export default function ObjectCollisions() {
  return (
    <LoadWrapper>
      <div className="space-y-4">
        <ExecuteAnimationScript id="hero">
          {`
            class State {
              constructor(display, actors) {
                this.display = display;
                this.actors = actors;
              }

              update(time) {

                /**
                 * provide an update ID to let actors update other actors only once
                 * used with collision detection
                 */
                const updateId = Math.floor(Math.random() * 1000000);
                const actors = this.actors.map(actor => {
                  return actor.update(this, time, updateId);
                });
                return new State(this.display, actors);
              }
            }


            class Vector {
              constructor(x, y) {
                this.x = x;
                this.y = y;
              }

              add(vector) {
                return new Vector(this.x + vector.x, this.y + vector.y);
              }

              subtract(vector) {
                return new Vector(this.x - vector.x, this.y - vector.y);
              }

              multiply(scalar) {
                return new Vector(this.x * scalar, this.y * scalar);
              }

              dotProduct(vector) {
                return this.x * vector.x + this.y * vector.y;
              }

              get magnitude() {
                return Math.sqrt(this.x ** 2 + this.y ** 2);
              }

              get direction() {
                return Math.atan2(this.x, this.y);
              }
            }

            class Canvas {
              constructor(parent = document.body, width = 400, height = 400) {
                this.canvas = document.createElement('canvas');
                this.canvas.width = width;
                this.canvas.height = height;
                parent.appendChild(this.canvas);
                this.ctx = this.canvas.getContext('2d');
              }

              sync(state) {
                this.clearDisplay();
                this.drawActors(state.actors);
              }

              clearDisplay() {
                // opacity controls the trail effect set to 1 to remove
                this.ctx.fillStyle = 'rgba(255, 255, 255, .4)';
                this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
              }

              drawActors(actors) {
                for (let actor of actors) {
                  if (actor.type === 'circle') {
                    this.drawCircle(actor);
                  }
                }
              }

              drawCircle(actor) {
                this.ctx.beginPath();
                this.ctx.arc(actor.position.x, actor.position.y, actor.radius, 0, Math.PI * 2);
                this.ctx.closePath();
                this.ctx.fillStyle = actor.color;
                this.ctx.fill();
              }
            }

            class Ball {
              constructor(config) {
                Object.assign(this,
                  {
                    id: Math.floor(Math.random() * 1000000),
                    type: 'circle',
                    position: new Vector(100, 100),
                    velocity: new Vector(5, 3),
                    radius: 25,
                    color: 'blue',
                    collisions: [],
                  },
                  config
                );
              }

              update(state, time, updateId) {

                /**
                 * if slice occurs on too many elements, it starts to lag
                 * collisions is an array to allow multiple collisions at once
                 */
                if (this.collisions.length > 10) {
                  this.collisions = this.collisions.slice(this.collisions.length - 3);
                }

                // setting bounds on the canvas prevents balls from overlapping on update
                const upperLimit = new Vector(state.display.canvas.width - this.radius, state.display.canvas.height - this.radius);
                const lowerLimit = new Vector(0 + this.radius, 0 + this.radius);

                // check if hitting left or right of container
                if (this.position.x >= upperLimit.x || this.position.x <= lowerLimit.x) {
                  this.velocity = new Vector(-this.velocity.x, this.velocity.y);
                }

                // check if hitting top or bottom of container
                if (this.position.y >= upperLimit.y || this.position.y <= lowerLimit.y) {
                  this.velocity = new Vector(this.velocity.x, -this.velocity.y);
                }

                /**
                 * this is the most stable solution to avoid overlap
                 * but it is slightly inaccurate
                 */
                for (let actor of state.actors) {
                  if (this === actor || this.collisions.includes(actor.id + updateId)) {
                    continue;
                  }

                  /**
                   * check if actors collide in the next frame and update now if they do
                   * innaccurate, but it is the easiest solution to the sticky collision bug
                   */
                  const distance = this.position.add(this.velocity).subtract(actor.position.add(actor.velocity)).magnitude;

                  if (distance <= this.radius + actor.radius) {
                    const v1 = collisionVector(this, actor);
                    const v2 = collisionVector(actor, this);
                    this.velocity = v1;
                    actor.velocity = v2;
                    this.collisions.push(actor.id + updateId);
                    actor.collisions.push(this.id + updateId);
                  }
                }

                const newX = Math.max(Math.min(this.position.x + this.velocity.x, upperLimit.x), lowerLimit.x);
                const newY = Math.max(Math.min(this.position.y + this.velocity.y, upperLimit.y), lowerLimit.y);

                return new Ball({
                  ...this,
                  position: new Vector(newX, newY),
                });
              }

              get area() {
                return Math.PI * this.radius ** 2;
              }

              get sphereArea() {
                return 4 * Math.PI * this.radius ** 2;
              }
            }

            // see elastic collision: https://en.wikipedia.org/wiki/Elastic_collision
            const collisionVector = (particle1, particle2) => {
              return particle1.velocity
                .subtract(particle1.position
                  .subtract(particle2.position)
                  .multiply(particle1.velocity
                    .subtract(particle2.velocity)
                    .dotProduct(particle1.position.subtract(particle2.position))
                    / particle1.position.subtract(particle2.position).magnitude ** 2
                  )

                  // add mass to the system
                  .multiply((2 * particle2.sphereArea) / (particle1.sphereArea + particle2.sphereArea))
                );
            };

            const isMovingTowards = (particle1, particle2) => {
              return particle2.position.subtract(particle1.position).dotProduct(particle1.velocity) > 0;
            };

            const runAnimation = animation => {
              let lastTime = null;
              const frame = time => {
                if (lastTime !== null) {
                  const timeStep = Math.min(100, time - lastTime) / 1000;

                  // return false from animation to stop
                  if (animation(timeStep) === false) {
                    return;
                  }
                }
                lastTime = time;
                requestAnimationFrame(frame);
              };
              requestAnimationFrame(frame);
            };

            const random = (max = 9, min = 0) => {
              return Math.floor(Math.random() * (max - min + 1) + min);
            };

            const colors = ['red', 'green', 'blue', 'purple', 'orange'];

            const collidingBalls = ({ width = 400, height = 400, parent = document.body, count = 50 }) => {
              const display = new Canvas(parent, width, height);
              const balls = [];
              for (let i = 0; i < count; i++) {
                balls.push(new Ball({
                  radius: random(8, 3) + Math.random(),
                  color: colors[random(colors.length - 1)],
                  position: new Vector(random(width - 10, 10), random(height - 10, 10)),
                  velocity: new Vector(random(3, -3), random(3, -3)),
                }));
              }
              let state = new State(display, balls);
              runAnimation(time => {
                state = state.update(time);
                display.sync(state);
              });
            };

            collidingBalls({
              count: 60,
              height: 350,
              width: 622,
              parent: document.getElementById('hero'),
            });
          `}
        </ExecuteAnimationScript>

        <p>
          I used this project as my introduction to JavaScript's canvas and
          creating a physics simulation. It took me an embarrassingly long time
          to perfect so I figured it would be worth sharing.
        </p>

        <p>
          The source code can be found{" "}
          <InlineLink href="https://gist.github.com/joshuabradley012/bd2bc96bbe1909ca8555a792d6a36e04">
            here
          </InlineLink>
          .
        </p>

        <H2>Getting started with canvas</H2>

        <p>
          If you have never used HTML5's{" "}
          <InlineCode code="<canvas>" meta="html" /> element,{" "}
          <InlineLink href="https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial">
            MDN
          </InlineLink>{" "}
          has a fantastic beginner's guide. Otherwise, let's dive right in.
        </p>

        <p>
          Using an ES6 class will let us manage state and create immutability
          later on, so let's get started with a constructor. To initialize the
          canvas we need to define the parent, width, and height. Most
          importantly, we need to assign it's context to a property that we can
          use later for drawing.
        </p>

        <BlockCode
          code={`
class Canvas {
  constructor(parent = document.body, width = 400, height = 400) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    parent.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
  }
}`}
          meta="javascript"
        />

        <p>
          With this, we can add methods to draw specific shapes. In this case,
          we'll only be drawing circles.
        </p>

        <BlockCode
          code={`
class Canvas {
  ...
  drawCircle(actor) {
    this.ctx.beginPath();
    this.ctx.arc(actor.position.x, actor.position.y, actor.radius, 0, Math.PI * 2);
    this.ctx.closePath();
    this.ctx.fillStyle = actor.color;
    this.ctx.fill();
  }
}`}
          meta="javascript"
        />

        <p>
          Notice that <InlineCode code="drawCircle" meta="javascript" /> expects
          an <InlineCode code="actor" meta="javascript" /> with a position and
          radius property. Let's implement a basic class that we will build on
          later.
        </p>

        <BlockCode
          code={`
class Ball {
  constructor(x = 20, y = 20, color = 'red', radius = 10) {
    this.color = color;
    this.position = { x: x, y: y };
    this.radius = radius;
  }
}`}
          meta="javascript"
        />

        <p>Now for a test…</p>

        <BlockCode
          code={`
const canvas = new Canvas();
const ball = new Ball();
canvas.drawCircle(ball);`}
          meta="javascript"
        />

        <ExecuteAnimationScript id="example-1">
          {`
            class Canvas {
              constructor(parent = document.body, width = 400, height = 400) {
                this.canvas = document.createElement("canvas");
                this.canvas.width = width;
                this.canvas.height = height;
                parent.appendChild(this.canvas);
                this.ctx = this.canvas.getContext("2d");
              }

              drawCircle(actor) {
                this.ctx.beginPath();
                this.ctx.arc(
                  actor.position.x,
                  actor.position.y,
                  actor.radius,
                  0,
                  Math.PI * 2,
                );
                this.ctx.closePath();
                this.ctx.fillStyle = actor.color;
                this.ctx.fill();
              }
            }

            class Ball {
              constructor(x = 20, y = 20, color = "red", radius = 10) {
                this.color = color;
                this.position = { x: x, y: y };
                this.radius = radius;
              }
            }

            const canvas = new Canvas(document.getElementById("example-1"), 622, 350);
            const ball = new Ball();
            canvas.drawCircle(ball);
          `}
        </ExecuteAnimationScript>

        <p>
          <em>Marvelous!</em>
        </p>

        <p>
          The next step is to add some motion to our canvas using an animation
          loop.
        </p>

        <H2>Adding animation</H2>

        <p>
          Before we get ahead of ourselves, let's create a{" "}
          <InlineCode code="Vector" meta="javascript" /> class with some useful
          linear algebra methods so we can work easily in a coordinate plane.
        </p>

        <BlockCode
          code={`
class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  /**
   * Returning a new Vector creates immutability
   * and allows chaining. These properties are
   * extremely useful with the complex formulas
   * we'll be using.
   **/
  add(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  subtract(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  multiply(scalar) {
    return new Vector(this.x * scalar, this.y * scalar);
  }

  dotProduct(vector) {
    return this.x * vector.x + this.y * vector.y;
  }

  get magnitude() {
    return Math.sqrt(this.x ** 2 + this.y ** 2);
  }

  get direction() {
    return Math.atan2(this.x, this.y);
  }
}`}
          meta="javascript"
        />

        <p>
          And let's update <InlineCode code="Ball" meta="javascript" /> to use
          an instance of <InlineCode code="Vector" meta="javascript" /> for its
          position.
        </p>

        <BlockCode
          code={`
class Ball {
  constructor(x = 20, y = 20, color = 'red', radius = 10) {
    this.color = color;
    this.position = new Vector(x, y);
    this.radius = radius;
  }
}`}
          meta="javascript"
        />

        <p>
          That will make adding motion, collisions, and mass a lot simpler. So
          about that animation loop, this is going to get complex. MDN's guide
          uses a very straightforward animation loop to achieve this. But I'm
          going to take a page out of{" "}
          <InlineLink href="https://eloquentjavascript.net/16_game.html">
            Eloquent JavaScript
          </InlineLink>{" "}
          and implement a <InlineCode code="State" meta="javascript" /> class
          that provides some level of encapsulation. This makes it easier to add
          new shapes or swap out the display with something like WebGL if
          needed.
        </p>

        <p>
          <InlineCode code="State" meta="javascript" /> should keep track of
          which display is being used as well as which objects are present in
          the animation. Finally, there needs to be a method that will update
          the position of each actor within each frame.
        </p>

        <BlockCode
          code={`
class State {
  constructor(display, actors) {
    this.display = display;
    this.actors = actors;
  }

  update(time) {
    /**
     * Provide an update ID to let actors
     * update other actors only once.
     **/
    const updateId = Math.floor(Math.random() * 1000000);
    const actors = this.actors.map(actor => {
      return actor.update(this, time, updateId);
    });
    return new State(this.display, actors);
  }
}`}
          meta="javascript"
        />

        <p>
          Now each <InlineCode code="actor" meta="javascript" /> within{" "}
          <InlineCode code="State" meta="javascript" /> should have an{" "}
          <InlineCode code="update" meta="javascript" /> method to increment the
          position within each frame. For{" "}
          <InlineCode code="Ball" meta="javascript" /> we need to add{" "}
          <InlineCode code="update" meta="javascript" /> as well as a{" "}
          <InlineCode code="velocity" meta="javascript" /> property. Because{" "}
          <InlineCode code="Ball" meta="javascript" /> is gaining a lot or
          properties we might want control of, we will provide a config object
          to the constructor using{" "}
          <InlineCode code="Object.assign" meta="javascript" /> as outlined in{" "}
          <InlineLink href="https://github.com/ryanmcdermott/clean-code-javascript#set-default-objects-with-objectassign">
            clean JavaScript
          </InlineLink>
          .
        </p>
        <BlockCode
          code={`
class Ball {
  constructor(config) {
    Object.assign(this,
      {
        type: 'circle',
        position: new Vector(20, 20),
        velocity: new Vector(5, 3),
        radius: 10,
        color: 'red',
      },
      config
    );
  }

  update(state, time, updateId) {
    // Check if hitting left or right of display
    if (this.position.x >= state.display.canvas.width || this.position.x <= 0) {
      this.velocity = new Vector(-this.velocity.x, this.velocity.y);
    }

    // Check if hitting top or bottom of display
    if (this.position.y >= state.display.canvas.height || this.position.y <= 0) {
      this.velocity = new Vector(this.velocity.x, -this.velocity.y);
    }

    return new Ball({
      ...this,
      position: this.position.add(this.velocity),
    });
  }
}`}
          meta="javascript"
        />

        <p>
          To keep <InlineCode code="Canvas" meta="javascript" /> up to date, we
          need to add a <InlineCode code="sync" meta="javascript" /> method to
          be called with each frame. It should redraw every{" "}
          <InlineCode code="actor" meta="javascript" /> in{" "}
          <InlineCode code="State" meta="javascript" />.
        </p>

        <BlockCode
          code={`
class Canvas {
  ...
  sync(state) {
    this.drawActors(state.actors);
  }

  drawActors(actors) {
    for (let actor of actors) {
      if (actor.type === 'circle') {
        this.drawCircle(actor);
      }
    }
  }
}`}
          meta="javascript"
        />

        <p>
          Finally we need a function that will recursively call{" "}
          <InlineCode code="requestAnimationFrame" meta="javascript" /> to
          create our animation loop.
        </p>

        <BlockCode
          code={`
const runAnimation = animation => {
  let lastTime = null;
  const frame = time => {
    if (lastTime !== null) {
      const timeStep = Math.min(100, time - lastTime) / 1000;

      // return false from animation to stop
      if (animation(timeStep) === false) {
        return;
      }
    }
    lastTime = time;
    requestAnimationFrame(frame);
  };
  requestAnimationFrame(frame);
};`}
          meta="javascript"
        />

        <p>
          With that we could technically run the animation. However, canvas
          keeps track of each frame drawn on it and the resulting animation will
          look like a paintbrush being dragged across a canvas. Here is what it
          looks like.
        </p>

        <BlockCode
          code={`
const display = new Canvas();
const ball = new Ball();
const actors = [ball];
let state = new State(display, actors);
runAnimation(time => {
  state = state.update(time);
  display.sync(state);
});`}
          meta="javascript"
        />

        <ExecuteAnimationScript id="example-2">
          {`
            class State {
              constructor(display, actors) {
                this.display = display;
                this.actors = actors;
              }

              update(time) {
                const updateId = Math.floor(Math.random() * 1000000);
                const actors = this.actors.map(actor => {
                  return actor.update(this, time, updateId);
                });
                return new State(this.display, actors);
              }
            }

            class Canvas {
              constructor(parent = document.body, width = 400, height = 400) {
                this.canvas = document.createElement("canvas");
                this.canvas.width = width;
                this.canvas.height = height;
                parent.appendChild(this.canvas);
                this.ctx = this.canvas.getContext("2d");
              }

              sync(state) {
                this.drawActors(state.actors);
              }

              drawActors(actors) {
                for (let actor of actors) {
                  if (actor.type === "circle") {
                    this.drawCircle(actor);
                  }
                }
              }

              drawCircle(actor) {
                this.ctx.beginPath();
                this.ctx.arc(
                  actor.position.x,
                  actor.position.y,
                  actor.radius,
                  0,
                  Math.PI * 2,
                );
                this.ctx.closePath();
                this.ctx.fillStyle = actor.color;
                this.ctx.fill();
              }
            }

            class Vector {
              constructor(x, y) {
                this.x = x;
                this.y = y;
              }

              add(vector) {
                return new Vector(this.x + vector.x, this.y + vector.y);
              }

              subtract(vector) {
                return new Vector(this.x - vector.x, this.y - vector.y);
              }

              multiply(scalar) {
                return new Vector(this.x * scalar, this.y * scalar);
              }

              dotProduct(vector) {
                return this.x * vector.x + this.y * vector.y;
              }

              get magnitude() {
                return Math.sqrt(this.x ** 2 + this.y ** 2);
              }

              get direction() {
                return Math.atan2(this.x, this.y);
              }
            }

            class Ball {
              constructor(config) {
                Object.assign(
                  this,
                  {
                    type: "circle",
                    position: new Vector(20, 20),
                    velocity: new Vector(5, 3),
                    radius: 10,
                    color: "red",
                  },
                  config,
                );
              }

              update(state, time, updateId) {
                // Check if hitting left or right of display
                if (
                  this.position.x >= state.display.canvas.width ||
                  this.position.x <= 0
                ) {
                  this.velocity = new Vector(-this.velocity.x, this.velocity.y);
                }

                // Check if hitting top or bottom of display
                if (
                  this.position.y >= state.display.canvas.height ||
                  this.position.y <= 0
                ) {
                  this.velocity = new Vector(this.velocity.x, -this.velocity.y);
                }

                return new Ball({
                  ...this,
                  position: this.position.add(this.velocity),
                });
              }
            }

            const runAnimation = animation => {
              let lastTime = null;
              const frame = time => {
                if (lastTime !== null) {
                  const timeStep = Math.min(100, time - lastTime) / 1000;

                  // return false from animation to stop
                  if (animation(timeStep) === false) {
                    return;
                  }
                }
                lastTime = time;
                requestAnimationFrame(frame);
              };
              requestAnimationFrame(frame);
            };

            const display = new Canvas(document.getElementById("example-2"), 622, 350);
            const ball = new Ball();
            const actors = [ball];
            let state = new State(display, actors);
            display.sync(state);

            const startButton = document.createElement("button");
            startButton.innerText = "Start animation";
            startButton.className = "btn mt-2";
            document.getElementById("example-2").appendChild(startButton);

            const animateOnClick = () => {
              runAnimation(time => {
                state = state.update(time);
                display.sync(state);
              });
            };

            startButton.addEventListener("click", animateOnClick, { once: true });
          `}
        </ExecuteAnimationScript>

        <p>
          To change this we can modify{" "}
          <InlineCode code="sync" meta="javascript" /> to clear{" "}
          <InlineCode code="Canvas" meta="javascript" /> on each update. We can
          achieve this by drawing a white rectangle over the entire{" "}
          <InlineCode code="Canvas" meta="javascript" />. And we can take
          advantage of the fact that previous frames are not destroyed. If the
          rectangle is opaque it will create a trail effect due to the
          previously drawn circles bleeding through.
        </p>
      </div>
    </LoadWrapper>
  );
}
