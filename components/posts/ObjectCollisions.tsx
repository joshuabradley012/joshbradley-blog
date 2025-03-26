import { BlockCode, InlineCode } from "@/components/ui/Code";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import Figure from "@/components/ui/Figure";
import { Ol, Li } from "@/components/ui/List";
import InlineLink from "@/components/ui/InlineLink";
import { H2 } from "@/components/ui/Headings";
import ExecuteAnimationScript from "@/components/ui/ExecuteAnimationScript";
import elasticCollision from "@/public/images/elastic-2d.gif";

export default function ObjectCollisions() {
  return (
    <div className="space-y-4">
      <ExecuteAnimationScript id="hero">
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
                  radius: 10,
                  color: 'red',
                  collisions: [],
                },
                config
              );
            }

            update(state, time, updateId) {
              if (this.collisions.length > 10) {
                this.collisions = this.collisions.slice(this.collisions.length - 3);
              }

              const upperLimit = new Vector(state.display.canvas.width - this.radius, state.display.canvas.height - this.radius);
              const lowerLimit = new Vector(0 + this.radius, 0 + this.radius);

              if (this.position.x >= upperLimit.x || this.position.x <= lowerLimit.x) {
                this.velocity = new Vector(-this.velocity.x, this.velocity.y);
              }

              if (this.position.y >= upperLimit.y || this.position.y <= lowerLimit.y) {
                this.velocity = new Vector(this.velocity.x, -this.velocity.y);
              }

              for (let actor of state.actors) {
                if (this === actor || this.collisions.includes(actor.id + updateId)) {
                  continue;
                }

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

          const collidingBalls = ({ width = 400, height = 400, parent = document.body, count = 50 } = {}) => {
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
        creating a physics simulation. It took me an embarrassingly long time to
        perfect so I figured it would be worth sharing.
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
        meta="javascript"
        code={`
class Canvas {
  constructor(parent = document.body, width = 400, height = 400) {
    this.canvas = document.createElement('canvas');
    this.canvas.width = width;
    this.canvas.height = height;
    parent.appendChild(this.canvas);
    this.ctx = this.canvas.getContext('2d');
  }
}
        `}
      />

      <p>
        With this, we can add methods to draw specific shapes. In this case,
        we'll only be drawing circles.
      </p>

      <BlockCode
        meta="javascript"
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
}
        `}
      />

      <p>
        Notice that <InlineCode code="drawCircle" meta="javascript" /> expects
        an <InlineCode code="actor" meta="javascript" /> with a position and
        radius property. Let's implement a basic class that we will build on
        later.
      </p>

      <BlockCode
        meta="javascript"
        code={`
class Ball {
  constructor(x = 20, y = 20, color = 'red', radius = 10) {
    this.color = color;
    this.position = { x: x, y: y };
    this.radius = radius;
  }
}
        `}
      />

      <p>Now for a test…</p>

      <BlockCode
        meta="javascript"
        code={`
const canvas = new Canvas();
const ball = new Ball();
canvas.drawCircle(ball);
        `}
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
        meta="javascript"
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
}
        `}
      />

      <p>
        And let's update <InlineCode code="Ball" meta="javascript" /> to use an
        instance of <InlineCode code="Vector" meta="javascript" /> for its
        position.
      </p>

      <BlockCode
        meta="javascript"
        code={`
class Ball {
  constructor(x = 20, y = 20, color = 'red', radius = 10) {
    this.color = color;
    this.position = new Vector(x, y);
    this.radius = radius;
  }
}
        `}
      />

      <p>
        That will make adding motion, collisions, and mass a lot simpler. So
        about that animation loop, this is going to get complex. MDN's guide
        uses a very straightforward animation loop to achieve this. But I'm
        going to take a page out of{" "}
        <InlineLink href="https://eloquentjavascript.net/16_game.html">
          Eloquent JavaScript
        </InlineLink>{" "}
        and implement a <InlineCode code="State" meta="javascript" /> class that
        provides some level of encapsulation. This makes it easier to add new
        shapes or swap out the display with something like WebGL if needed.
      </p>

      <p>
        <InlineCode code="State" meta="javascript" /> should keep track of which
        display is being used as well as which objects are present in the
        animation. Finally, there needs to be a method that will update the
        position of each actor within each frame.
      </p>

      <BlockCode
        meta="javascript"
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
}
        `}
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
        properties we might want control of, we will provide a config object to
        the constructor using{" "}
        <InlineCode code="Object.assign" meta="javascript" /> as outlined in{" "}
        <InlineLink href="https://github.com/ryanmcdermott/clean-code-javascript#set-default-objects-with-objectassign">
          clean JavaScript
        </InlineLink>
        .
      </p>
      <BlockCode
        meta="javascript"
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
}
        `}
      />

      <p>
        To keep <InlineCode code="Canvas" meta="javascript" /> up to date, we
        need to add a <InlineCode code="sync" meta="javascript" /> method to be
        called with each frame. It should redraw every{" "}
        <InlineCode code="actor" meta="javascript" /> in{" "}
        <InlineCode code="State" meta="javascript" />.
      </p>

      <BlockCode
        meta="javascript"
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
}
        `}
      />

      <p>
        Finally we need a function that will recursively call{" "}
        <InlineCode code="requestAnimationFrame" meta="javascript" /> to create
        our animation loop.
      </p>

      <BlockCode
        meta="javascript"
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
};
        `}
      />

      <p>
        With that we could technically run the animation. However, canvas keeps
        track of each frame drawn on it and the resulting animation will look
        like a paintbrush being dragged across a canvas. Here is what it looks
        like.
      </p>

      <BlockCode
        meta="javascript"
        code={`
const display = new Canvas();
const ball = new Ball();
const actors = [ball];
let state = new State(display, actors);

runAnimation(time => {
  state = state.update(time);
  display.sync(state);
});
        `}
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
              if (
                this.position.x >= state.display.canvas.width ||
                this.position.x <= 0
              ) {
                this.velocity = new Vector(-this.velocity.x, this.velocity.y);
              }

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
        rectangle is opaque it will create a trail effect due to the previously
        drawn circles bleeding through.
      </p>

      <BlockCode
        meta="javascript"
        code={`
class Canvas {
  ...
  sync(state) {
    this.clearDisplay();
    this.drawActors(state.actors);
  }

  clearDisplay() {

    /**
     * If the rgba opacity is set to 1, there
     * will be no trail. The lower the opacity,
     * the longer the trail.
     **/
    this.ctx.fillStyle = 'rgba(255, 255, 255, .4)';
    this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
  }
  ...
}
        `}
      />

      <p>Now we have motion!</p>

      <ExecuteAnimationScript id="example-3">
        {`
          class State {
            constructor(display, actors) {
              this.display = display;
              this.actors = actors;
            }

            update(time) {
              const updateId = Math.floor(Math.random() * 1000000);
              const actors = this.actors.map((actor) => {
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
              this.clearDisplay();
              this.drawActors(state.actors);
            }

            clearDisplay() {
              this.ctx.fillStyle = "rgba(255, 255, 255, .4)";
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
              if (
                this.position.x >= state.display.canvas.width ||
                this.position.x <= 0
              ) {
                this.velocity = new Vector(-this.velocity.x, this.velocity.y);
              }

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
                if (animation(timeStep) === false) {
                  return;
                }
              }
              lastTime = time;
              requestAnimationFrame(frame);
            };
            requestAnimationFrame(frame);
          };

          const display = new Canvas(document.getElementById("example-3"), 622, 350);
          const ball = new Ball();
          const actors = [ball];
          let state = new State(display, actors);
          display.sync(state);

          runAnimation((time) => {
            state = state.update(time);
            display.sync(state);
          });
        `}
      </ExecuteAnimationScript>

      <p>
        <strong>
          <em>Deep breath</em>
        </strong>{" "}
        it's time for the final hurdle, adding collisions.
      </p>

      <H2>Detecting collisions</H2>

      <p>
        You've already seen a bit of collision detection in the last update we
        made to <InlineCode code="Ball" meta="javascript" /> where we are
        checking if the ball is hitting the walls of the canvas, and updating
        the velocity accordingly.
      </p>

      <p>
        However, to find if a ball is colliding with another ball, we have to
        check <em>every ball</em> against <em>every ball</em>. This is very
        inefficient with an O(n<sup>2</sup>) runtime but is the best solution
        outside of creating an elaborate matrix to represent coordinates. And it
        works well for less than 1000 objects.
      </p>

      <p>
        This can be achieved with a <InlineCode code="for" meta="javascript" />{" "}
        loop on each <InlineCode code="update" meta="javascript" /> of{" "}
        <InlineCode code="Ball" meta="javascript" />.
      </p>

      <BlockCode
        meta="javascript"
        code={`
class Ball {
  ...
  update(state, time, updateId) {
    ...
    for (let actor of state.actors) {

      // A ball can't collide with itself
      if (this === actor) {
        continue;
      }

      const distance = this.position.subtract(actor.position).magnitude;

      if (distance <= this.radius + actor.radius) {
        this.color = 'grey';
        actor.color = 'grey';
      }
    }

    return new Ball({
      ...this,
      position: this.position.add(this.velocity),
    });
  }
}
        `}
      />

      <p>
        Because we are using a <InlineCode code="Vector" meta="javascript" /> to
        track the position of the ball, we can measure the distance between two
        objects using the{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Euclidean_vector#Length">
          magnitude
        </InlineLink>{" "}
        of the{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Euclidean_vector#Addition_and_subtraction">
          difference
        </InlineLink>{" "}
        between both object's position. Remember position is measured at the
        object's center, so to detect when the edges collide, we need to check
        if that distance is less than both object's radius combined.
      </p>

      <p>
        For now, nothing very interesting happens when the balls collide, they
        just change color. But it's a start!
      </p>

      <BlockCode
        meta="javascript"
        code={`
const display = new Canvas();

const ball1 = new Ball({
  position: new Vector(40, 100),
  velocity: new Vector(1, 0),
  radius: 20,
});

const ball2 = new Ball({
  position: new Vector(200, 100),
  velocity: new Vector(-1, 0),
  radius: 20,
  color: 'blue',
});

const actors = [ball1, ball2];
let state = new State(display, actors);

runAnimation(time => {
  state = state.update(time);
  display.sync(state);
});
        `}
      />

      <ExecuteAnimationScript id="example-4">
        {`
          class State {
            constructor(display, actors) {
              this.display = display;
              this.actors = actors;
            }

            update(time) {
              const updateId = Math.floor(Math.random() * 1000000);
              const actors = this.actors.map((actor) => {
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
              this.clearDisplay();
              this.drawActors(state.actors);
            }

            clearDisplay() {
              this.ctx.fillStyle = "rgba(255, 255, 255, .4)";
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
          }

          class Ball {
            constructor(config) {
              Object.assign(
                this,
                {
                  type: "circle",
                  position: new Vector(30, 30),
                  velocity: new Vector(5, 3),
                  radius: 10,
                  color: "red",
                },
                config,
              );
            }

            update(state, time, updateId) {
              if (
                this.position.x >= state.display.canvas.width ||
                this.position.x <= 0
              ) {
                this.velocity = new Vector(-this.velocity.x, this.velocity.y);
              }

              if (
                this.position.y >= state.display.canvas.height ||
                this.position.y <= 0
              ) {
                this.velocity = new Vector(this.velocity.x, -this.velocity.y);
              }

              for (let actor of state.actors) {
                // A ball can't collide with itself
                if (this === actor) {
                  continue;
                }

                const distance = this.position.subtract(actor.position).magnitude;

                if (distance <= this.radius + actor.radius) {
                  this.color = "grey";
                  actor.color = "grey";
                }
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
                if (animation(timeStep) === false) {
                  return;
                }
              }
              lastTime = time;
              requestAnimationFrame(frame);
            };
            requestAnimationFrame(frame);
          };

          const display = new Canvas(document.getElementById("example-4"), 622, 350);
          const ball1 = new Ball({
            position: new Vector(40, 100),
            velocity: new Vector(1, 0),
            radius: 20,
          });
          const ball2 = new Ball({
            position: new Vector(200, 100),
            velocity: new Vector(-1, 0),
            radius: 20,
            color: 'blue',
          });
          const actors = [ball1, ball2];
          let state = new State(display, actors);
          display.sync(state);

          const startButton = document.createElement("button");
          startButton.innerText = "Start animation";
          startButton.className = "btn mt-2";
          document.getElementById("example-4").appendChild(startButton);

          const animateOnClick = () => {
            runAnimation(time => {
              state = state.update(time);
              display.sync(state);
            });
          };

          startButton.addEventListener("click", animateOnClick, { once: true });
        `}
      </ExecuteAnimationScript>

      <H2>Calculating two-dimensional elastic collisions</H2>

      <p>
        It's math time! We're going to be using elastic collisions because I
        found it to be a fun animation without getting too complex with gravity
        and friction. But if that's what you're after, give it a shot.
      </p>

      <p>
        Wikipedia has a fantastic animation showing what happens in a 2D
        collision on their{" "}
        <InlineLink href="https://en.wikipedia.org/wiki/Elastic_collision#Two-dimensional">
          elastic collision
        </InlineLink>{" "}
        page.
      </p>

      <Figure
        src={elasticCollision}
        alt="Two-dimensional elastic collision"
        caption="Two-dimensional elastic collision"
      />

      <p>
        Mathematically this can be defined as the following. Keep in mind there
        is an alternate formula that uses angles, but because we are using
        vectors, this is an easier formula to implement.
      </p>

      <BlockMath
        math="\textbf v^{\prime}_1 = \textbf v_1 - \frac{2m_2}{m_1 + m_2} \frac{\langle
          \textbf v_1 - \textbf v_2, \textbf x_1 - \textbf x_2 \rangle}{\lVert \textbf
          x_1 - \textbf x_2 \rVert^2} (\textbf x_1 - \textbf x_2)"
      />

      <BlockMath
        math="\textbf v^{\prime}_2 = \textbf v_2 - \frac{2m_1}{m_1 + m_2} \frac{\langle \textbf v_2
          - \textbf v_1, \textbf x_2 - \textbf x_1 \rangle}{\lVert \textbf x_2 - \textbf
          x_1 \rVert^2} (\textbf x_2 - \textbf x_1)"
      />

      <p>
        Where <InlineMath math="\textbf v^{\prime}" /> is the resulting velocity
        vector, <InlineMath math="\textbf v" /> is the current velocity,{" "}
        <InlineMath math="m" /> is mass, and <InlineMath math="\textbf x" /> is
        the position. Angle brackets{" "}
        <InlineMath math="\langle \ldots \rangle" /> denote the{" "}
        <InlineLink href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length">
          dot product
        </InlineLink>{" "}
        of the vector and double vertical bars{" "}
        <InlineMath math="\lVert \ldots \rVert" /> denote the{" "}
        <InlineLink href="https://www.khanacademy.org/math/linear-algebra/vectors-and-spaces/dot-cross-products/v/vector-dot-product-and-vector-length">
          magnitude or length
        </InlineLink>{" "}
        of the vector.
      </p>

      <p>
        Currently, <InlineCode code="Ball" meta="javascript" /> doesn't have a
        representation of its mass. Assuming a constant density, we can use the
        spherical area of the circle as our mass.
      </p>

      <BlockCode
        meta="javascript"
        code={`
class Ball {
  ...
  get sphereArea() {
    return 4 * Math.PI * this.radius ** 2;
  }
}
        `}
      />

      <p>
        Using the methods we added to the{" "}
        <InlineCode code="Vector" meta="javascript" /> class we can write this
        in JavaScript. It's not a nice formula, but it is compact and accurate.
      </p>

      <BlockCode
        meta="javascript"
        code={`
const collisionVector = (b1, b2) => {
  return b1.velocity

    // Take away from the starting velocity
    .subtract(

      // Subtract the positions
      b1.position
      .subtract(b2.position)

      /**
       * Multiply by the dot product of
       * the difference between the velocity
       * and position of both vectors
       **/
      .multiply(
        b1.velocity
        .subtract(b2.velocity)
        .dotProduct(
          b1.position
          .subtract(b2.position)
        )
        / b1.position
        .subtract(b2.position)
        .magnitude ** 2
      )

      /**
       * Multiply by the amount of mass the
       * object represents in the collision.
       **/
      .multiply(
        (2 * b2.sphereArea)
        / (b1.sphereArea + b2.sphereArea)
      )
    );
};
        `}
      />

      <p>
        It's worth bringing attention to how immutability makes this possible.
        We can perform multiple operations on the same vector without changing
        it's properties while returning new vectors that can be used for
        chaining.
      </p>

      <p>
        Now we can use this in the{" "}
        <InlineCode code="update" meta="javascript" /> method of{" "}
        <InlineCode code="Ball" meta="javascript" />. However, there is another
        issue we need to resolve. We can't update velocities one at a time
        because the current velocity of both actors is necessary to determine
        their new velocities. And if we update both actor's velocity now, the
        velocity will be updated twice because every actor checks every actor.
      </p>

      <p>
        So we need a way to update both actors together but only update them
        once. There is likely a better way, but what I came up with is creating
        an ID for each collision and keeping track of those IDs in an array so
        we can skip them in the current update. The collision ID is composed of
        the object ID and update ID.
      </p>

      <p>
        We already added an update ID to{" "}
        <InlineCode code="State" meta="javascript" /> so let's add an object ID
        to <InlineCode code="Ball" meta="javascript" /> as well as a collisions
        array. These are the pieces we need to calculate collisions in{" "}
        <InlineCode code="Ball.update" meta="javascript" /> so let's update that
        as well.
      </p>

      <BlockCode
        meta="javascript"
        code={`
class Ball {
  constructor(config) {
    Object.assign(this,
      {
        id: Math.floor(Math.random() * 1000000),
        type: 'circle',
        position: new Vector(40, 40),
        velocity: new Vector(5, 3),
        radius: 10,
        color: 'red',
        collisions: [],
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

    for (let actor of state.actors) {

      /**
       * A ball can't collide with itself and
       * skip balls that have already collided.
       **/
      if (this === actor || this.collisions.includes(actor.id + updateId)) {
        continue;
      }

      const distance = this.position.subtract(actor.position).magnitude;

      if (distance <= this.radius + actor.radius) {
        const v1 = collisionVector(this, actor);
        const v2 = collisionVector(actor, this);
        this.velocity = v1;
        actor.velocity = v2;
        this.collisions.push(actor.id + updateId);
        actor.collisions.push(this.id + updateId);
      }
    }

    return new Ball({
      ...this,
      position: this.position.add(this.velocity),
    });
  }
  ...
}
`}
      />

      <p>
        <strong>
          <em>Phew</em>
        </strong>
        , that was a big update. Time to kick the tires.
      </p>

      <BlockCode
        meta="javascript"
        code={`
const display = new Canvas();

const ball1 = new Ball({
  position: new Vector(40, 100),
  velocity: new Vector(2, 3),
  radius: 20,
});

const ball2 = new Ball({
  position: new Vector(200, 100),
  velocity: new Vector(-1, 3),
  color: 'blue',
});

const actors = [ball1, ball2];
let state = new State(display, actors);

runAnimation(time => {
  state = state.update(time);
  display.sync(state);
});
`}
      />

      <ExecuteAnimationScript id="example-5">
        {`
          class State {
            constructor(display, actors) {
              this.display = display;
              this.actors = actors;
            }

            update(time) {
              const updateId = Math.floor(Math.random() * 1000000);
              const actors = this.actors.map((actor) => {
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
              this.clearDisplay();
              this.drawActors(state.actors);
            }

            clearDisplay() {
              this.ctx.fillStyle = "rgba(255, 255, 255, .4)";
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
          }

          class Ball {
            constructor(config) {
              Object.assign(
                this,
                {
                  id: Math.floor(Math.random() * 1000000),
                  type: "circle",
                  position: new Vector(40, 100),
                  velocity: new Vector(2, 0),
                  radius: 10,
                  color: "red",
                  collisions: [],
                },
                config,
              );
            }

            update(state, time, updateId) {
              if (
                this.position.x >= state.display.canvas.width ||
                this.position.x <= 0
              ) {
                this.velocity = new Vector(-this.velocity.x, this.velocity.y);
              }

              if (
                this.position.y >= state.display.canvas.height ||
                this.position.y <= 0
              ) {
                this.velocity = new Vector(this.velocity.x, -this.velocity.y);
              }

              for (let actor of state.actors) {
                if (this === actor || this.collisions.includes(actor.id + updateId)) {
                  continue;
                }

                const distance = this.position.subtract(actor.position).magnitude;

                if (distance <= this.radius + actor.radius) {
                  const v1 = collisionVector(this, actor);
                  const v2 = collisionVector(actor, this);
                  this.velocity = v1;
                  actor.velocity = v2;
                  this.collisions.push(actor.id + updateId);
                  actor.collisions.push(this.id + updateId);
                }
              }

              return new Ball({
                ...this,
                position: this.position.add(this.velocity),
              });
            }

            get sphereArea() {
              return 4 * Math.PI * this.radius ** 2;
            }
          }

          const collisionVector = (b1, b2) => {
            return b1.velocity.subtract(
              b1.position
                .subtract(b2.position)
                .multiply(
                  b1.velocity
                    .subtract(b2.velocity)
                    .dotProduct(b1.position.subtract(b2.position)) /
                    b1.position.subtract(b2.position).magnitude ** 2,
                )
                .multiply((2 * b2.sphereArea) / (b1.sphereArea + b2.sphereArea)),
            );
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

          const display = new Canvas(document.getElementById("example-5"), 622, 350);
          const ball1 = new Ball({
            position: new Vector(40, 100),
            velocity: new Vector(2, 3),
            radius: 20,
          });
          const ball2 = new Ball({
            position: new Vector(200, 100),
            velocity: new Vector(-1, 3),
            color: "blue",
          });
          const actors = [ball1, ball2];
          let state = new State(display, actors);

          runAnimation((time) => {
            state = state.update(time);
            display.sync(state);
          });
        `}
      </ExecuteAnimationScript>

      <p>
        Now that is <em>awesome</em>. But unfortunately, we’re not quite done.
        There are some edge cases we need to deal with.
      </p>

      <H2>Resolve bugs</H2>

      <p>Here's our TODO list:</p>

      <Ol>
        <Li>Update wall collisions so only the edge touches</Li>
        <Li>Fix "sticky" collisions</Li>
        <Li>Fix wall squeeze collisions</Li>
        <Li>Prevent excessive memory usage</Li>
      </Ol>

      <p>
        The first issue of wall collisions is relatively simple. We just need to
        give the position update an upper and lower bound based on the canvas
        walls.
      </p>

      <p>
        For the second issue, you're likely wondering what a sticky collision
        is. As the description suggests, there are moments when two objects
        overlap and stick to each other. This leads to a continuous collision
        update that normally results in a frantic spiraling. It's an issue that
        only arises in very specific conditions, but becomes quite common with
        10+ balls in the frame.
      </p>

      <p>Here is an example of a sticky collision.</p>

      <ExecuteAnimationScript id="example-6">
        {`
          class State {
            constructor(display, actors) {
              this.display = display;
              this.actors = actors;
            }

            update(time) {
              const updateId = Math.floor(Math.random() * 1000000);
              const actors = this.actors.map((actor) => {
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
              this.clearDisplay();
              this.drawActors(state.actors);
            }

            clearDisplay() {
              this.ctx.fillStyle = "rgba(255, 255, 255, .4)";
              this.ctx.fillRect(0, 0, this.canvas.width, this.canvas.height);
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
          }

          class Ball {
            constructor(config) {
              Object.assign(
                this,
                {
                  id: Math.floor(Math.random() * 1000000),
                  type: "circle",
                  position: new Vector(40, 100),
                  velocity: new Vector(2, 0),
                  radius: 10,
                  color: "red",
                  collisions: [],
                },
                config,
              );
            }

            update(state, time, updateId) {
              if (
                this.position.x >= state.display.canvas.width ||
                this.position.x <= 0
              ) {
                this.velocity = new Vector(-this.velocity.x, this.velocity.y);
              }

              if (
                this.position.y >= state.display.canvas.height ||
                this.position.y <= 0
              ) {
                this.velocity = new Vector(this.velocity.x, -this.velocity.y);
              }

              for (let actor of state.actors) {
                if (this === actor || this.collisions.includes(actor.id + updateId)) {
                  continue;
                }

                const distance = this.position.subtract(actor.position).magnitude;

                if (distance <= this.radius + actor.radius) {
                  const v1 = collisionVector(this, actor);
                  const v2 = collisionVector(actor, this);
                  this.velocity = v1;
                  actor.velocity = v2;
                  this.collisions.push(actor.id + updateId);
                  actor.collisions.push(this.id + updateId);
                }
              }

              return new Ball({
                ...this,
                position: this.position.add(this.velocity),
              });
            }

            get sphereArea() {
              return 4 * Math.PI * this.radius ** 2;
            }
          }

          const collisionVector = (b1, b2) => {
            return b1.velocity.subtract(
              b1.position
                .subtract(b2.position)
                .multiply(
                  b1.velocity
                    .subtract(b2.velocity)
                    .dotProduct(b1.position.subtract(b2.position)) /
                    b1.position.subtract(b2.position).magnitude ** 2,
                )
                .multiply((2 * b2.sphereArea) / (b1.sphereArea + b2.sphereArea)),
            );
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

          const display = new Canvas(document.getElementById("example-6"), 622, 350);
          const ball1 = new Ball({
            position: new Vector(180, 100),
            velocity: new Vector(2, 0),
            radius: 20,
          });
          const ball2 = new Ball({
            position: new Vector(200, 100),
            velocity: new Vector(-2, 5),
            radius: 20,
            color: "blue",
          });
          const actors = [ball1, ball2];
          let state = new State(display, actors);
          display.sync(state);

          const startButton = document.createElement("button");
          startButton.innerText = "Start animation";
          startButton.className = "btn mt-2";
          document.getElementById("example-6").appendChild(startButton);

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
        The solution I implemented is a simple bandaid. I check for collisions
        in the next frame and update the current frame as if they had collided.
        This way the objects never get a chance to overlap. However, they never
        get a chance to collide either. Thankfully, the effect is barely
        noticeable.
      </p>

      <p>
        In pursuit of a better solution, I looked into calculating the amount of
        overlap and removing that distance from the current position before
        adding the new velocity. And it worked in a small environment, but once
        again issue arose when there were 10+ balls in the simulation. I'm not
        sure if this is due to float precision, or balls backing up into
        another.
      </p>

      <p>
        Wall squeezes occur when a ball hits the wall and another ball at the
        same time. I don't have a perfect solution for this. If wall collisions
        are calculated first, velocity is lost. If they are calculated after,
        velocity is gained. This is due to the bounding condition we created for
        wall collisions where the position is stopped exactly when the edge
        touches the wall. However, if I remove this bounding condition, objects
        can get stuck against the wall.
      </p>

      <p>
        I decided to go with the solution that loses velocity because it looks
        the best with animations that run for a long time.
      </p>

      <p>
        Finally, because we are keeping track of each collision in each ball, it
        can quickly overwhelm memory. An easy fix is to trim down the size of
        the array at a certain limit. I chose 10 as the limit because I have a
        hard time thinking of a situation where a ball will simultaneously
        collide with 10 other balls. However, this could be adjusted depending
        on the needs.
      </p>

      <p>Here is a stable solution to these bugs.</p>

      <BlockCode
        meta="javascript"
        code={`
class Ball {
  ...
  update(state, time, updateId) {

    /**
     * Limit the size of the collisions array to
     * prevent memory issues. If slice occurs on
     * too many elements, it starts to lag.
     **/
    if (this.collisions.length > 10) {
      this.collisions = this.collisions.slice(this.collisions.length - 3);
    }

    /**
     * Set the upper and lower bounds based on the
     * size of the canvas and size of the ball.
     **/
    const upperLimit = new Vector(
      state.display.canvas.width - this.radius,
      state.display.canvas.height - this.radius
    );
    const lowerLimit = new Vector(0 + this.radius, 0 + this.radius);

    // Check if hitting left or right of display
    if (this.position.x >= upperLimit.x || this.position.x <= lowerLimit.x) {
      this.velocity = new Vector(-this.velocity.x, this.velocity.y);
    }

    // Check if hitting top or bottom of display
    if (this.position.y >= upperLimit.y || this.position.y <= lowerLimit.y) {
      this.velocity = new Vector(this.velocity.x, -this.velocity.y);
    }

    for (let actor of state.actors) {

      /**
       * A ball can't collide with itself and
       * skip balls that have already collided.
       **/
      if (this === actor || this.collisions.includes(actor.id + updateId)) {
        continue;
      }

      /**
       * Check if actors collide in the next frame
       * by adding the current velocity and updating
       * now if they do.
       */
      const distance = this.position.add(this.velocity)
        .subtract(actor.position.add(actor.velocity))
        .magnitude;

      if (distance <= this.radius + actor.radius) {
        const v1 = collisionVector(this, actor);
        const v2 = collisionVector(actor, this);
        this.velocity = v1;
        actor.velocity = v2;
        this.collisions.push(actor.id + updateId);
        actor.collisions.push(this.id + updateId);
      }
    }

    /**
     * Use the bounds to limit the position
     * update.
     **/
    const newX = Math.max(
      Math.min(this.position.x + this.velocity.x, upperLimit.x),
      lowerLimit.x
    );

    const newY = Math.max(
      Math.min(this.position.y + this.velocity.y, upperLimit.y),
      lowerLimit.y
    );

    return new Ball({
      ...this,
      position: new Vector(newX, newY),
    });
  }
  ...
}
`}
      />

      <p>
        Now stickiness can only occur if two objects spawn on top of each other.
        Which can happen using a random generator like I did for the intro
        animation in this article.
      </p>

      <p>
        <strong>
          <em>And we're done!</em>
        </strong>{" "}
        Let's give it a final whirl.
      </p>

      <BlockCode
        meta="javascript"
        code={`
const display = new Canvas();

const ball1 = new Ball({
  position: new Vector(40, 100),
  velocity: new Vector(2, 3),
  radius: 20,
});

const ball2 = new Ball({
  position: new Vector(200, 100),
  velocity: new Vector(-1, 3),
  color: 'blue',
});

const actors = [ball1, ball2];
let state = new State(display, actors);

runAnimation(time => {
  state = state.update(time);
  display.sync(state);
});
`}
      />

      <ExecuteAnimationScript id="example-7">
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
                  radius: 10,
                  color: 'red',
                  collisions: [],
                },
                config
              );
            }

            update(state, time, updateId) {
              if (this.collisions.length > 10) {
                this.collisions = this.collisions.slice(this.collisions.length - 3);
              }

              const upperLimit = new Vector(state.display.canvas.width - this.radius, state.display.canvas.height - this.radius);
              const lowerLimit = new Vector(0 + this.radius, 0 + this.radius);

              if (this.position.x >= upperLimit.x || this.position.x <= lowerLimit.x) {
                this.velocity = new Vector(-this.velocity.x, this.velocity.y);
              }

              if (this.position.y >= upperLimit.y || this.position.y <= lowerLimit.y) {
                this.velocity = new Vector(this.velocity.x, -this.velocity.y);
              }

              for (let actor of state.actors) {
                if (this === actor || this.collisions.includes(actor.id + updateId)) {
                  continue;
                }

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

          const collisionVector = (particle1, particle2) => {
            return particle1.velocity
              .subtract(particle1.position
                .subtract(particle2.position)
                .multiply(particle1.velocity
                  .subtract(particle2.velocity)
                  .dotProduct(particle1.position.subtract(particle2.position))
                  / particle1.position.subtract(particle2.position).magnitude ** 2
                )
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

          const display = new Canvas(document.getElementById("example-7"), 622, 350);
          const ball1 = new Ball({
            position: new Vector(40, 100),
            velocity: new Vector(2, 3),
            radius: 20,
          });
          const ball2 = new Ball({
            position: new Vector(200, 100),
            velocity: new Vector(-1, 3),
            color: "blue",
          });
          const actors = [ball1, ball2];
          let state = new State(display, actors);

          runAnimation((time) => {
            state = state.update(time);
            display.sync(state);
          });
        `}
      </ExecuteAnimationScript>

      <H2>Final notes</H2>

      <p>
        I wrapped all of this in a function with a loop to generate balls of
        random size, color, at different positions and speeds. You can see all
        of this in the source code{" "}
        <InlineLink href="https://gist.github.com/joshuabradley012/bd2bc96bbe1909ca8555a792d6a36e04">
          here
        </InlineLink>
        . But to wrap up the article, here is the script I used to generate the
        intro animation in this article.
      </p>

      <BlockCode
        meta="javascript"
        code={`
const random = (max = 9, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const colors = ['red', 'green', 'blue', 'purple', 'orange'];

const collidingBalls = ({
  width = 400,
  height = 400,
  parent = document.body,
  count = 50
} = {}) => {
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
}

collidingBalls({
  count: 60,
  height: 350,
  width: 622,
  parent: document.getElementById('hero'),
});
`}
      />

      <p>
        This was a lot of fun. But it's not perfect. There are still issues with
        imperfect collisions (because the balls do not touch), wall squeezes,
        and balls that are spawned on top of each other. If you come up with a
        solution for any of these things, please let me know!
      </p>
    </div>
  );
}
