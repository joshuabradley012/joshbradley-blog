import { PostHeader } from "@/components/ui/PostHeader";
import BlogJsonLd from "@/components/ui/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";

const post = getPostBySlug("goodbye-procore");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function GoodbyeProcore() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="space-y-4">
        <p>
          Working at Procore defined my career. I often reflect on whether the
          experience was good or bad—and the truth is, it was both. Ultimately I
          grew and learned many things about business, people, and myself.
        </p>

        <p>
          Nestled on the bluffs of Carpinteria, Procore sat on some of the most
          prime real estate in the world. Just south of Santa Barbara, it
          overlooked the ocean and was within walking distance of the legendary
          surf spot, Rincon. It was the gem of Santa Barbara's growing tech
          scene with a $2B+ dollar valuation and rapid growth. At the time, I
          didn't realize just how much of an anomaly this was—or what it would
          mean for my career. So when I received the call in 2017 with my hiring
          offer, I didn't hesitate to say yes. I remember crying as I felt a
          weight lifting off of me. I'd had a very traumatic year and this was a
          break that I desperately needed. The struggle of working through my
          early career as a college drop-out was being rewarded with consistent
          income, benefits, and career growth. This brought me hope that I
          hadn't felt in years. From the bottom of my heart, thank you Procore.
        </p>

        <p>
          The lifestyle was incredible. My breaks involved walks along the
          Pacific Ocean. I made friends with good people. I enjoyed free meals,
          lavish events, and a beer-stocked fridge. I sat next to a beautiful,
          witty, and inspiring woman, and I was there the day she brought her
          puppy to work for the first time. They quickly became a big part of my
          life. Having a dog to play with, walk, and babysit brought me back to
          my childhood and softened my heart. I finished most days snapping
          pictures of the blood-red sun as it sank heavy into the horizon.
        </p>

        <p>
          However, my rose-tinted perspective didn't last long. I was quickly
          thrust into an entry level position of a large and dysfunctional
          marketing department. I joined one week after the incumbent CMO had
          been sacked, on a team with a long history of spotty leadership, under
          a manager who glorified getting paid to do nothing. And there was a
          lot to do.
        </p>

        <p>
          Out of naivety, habit, and nature, I ignored the warning signs and
          dove deep into my work. I reveled in having the skills to solve
          challenges that needed solving. I didn't let my{" "}
          <q>SEO Specialist I</q> title define me—I touched everything I could,
          from web analytics to CRO to development. It was an outlet that filled
          my empty life. I was always the last one out and 60 hour weeks became
          my norm, my identity. I didn't have to work like this, most of my
          peers worked a relaxed 30-40 hour week, but I chose to. I truly loved
          it.
        </p>

        <p>
          Over time, this naivety translated into frustration. It felt like no
          matter how hard I worked or how much I achieved, my efforts weren't
          recognized in compensation. I was well known, my reputation as a
          determined problem solver spread through the company. I received
          plenty of verbal praise but saw little actual career growth,
          especially when compared to peers who seemed to be receiving a
          promotion or raise with every cycle. In four years I received one
          promotion and a title change that moved me into web development.
        </p>

        <p>
          I learned some very hard lessons about the reality of corporate
          politics and the importance of team structure. Underlying my
          experience was chaos. I experienced the regime change of three direct
          managers, four team directors, and two CMOs. Each with new
          expectations and no clue about what I had previously achieved.
          Further, Procore's "three O's" culture—ownership, optimism, and
          openness—was subverted into an Orwellian apparatus of control and
          performance theater. Directors would swoop in with a final review of
          my work to slap their name on it, exemplifying "ownership." My
          performance reviews would be dampened by the fuzzy critique that I
          "wasn't an optimistic team player." Meanwhile, I suffered the
          double-speak encouragement to be "open" about my career ambitions, so
          long as we never spoke about compensation. Salary negotiations were
          actively discouraged and veiled behind layers of red tape as managers
          were trained to suppress information.
        </p>

        <p>
          Our unusual setting on the picturesque bluffs of Santa Barbara was a
          contributor to this inefficacy. We didn't have the talent density of
          Silicon Valley. The greater Santa Barbara area was only around 120,000
          people, and the local colleges were acclaimed for their achievements
          in optics, not computer science. Leadership found it important to
          support the community and selected most of the first thousand
          employees from the sun-baked UCSB grads who lived there. These were
          happy-go-lucky, granola crunching, West coast surfers who were
          enamored by Procore's unlimited PTO and free lunches. Hard-nosed,
          contrarian obsessives like myself were considered "poor culture fits."
        </p>

        <p>
          My peers who performed well in this environment were politically savvy
          and fortunately positioned. They knew how to play the game. They were
          often attractive, charismatic, or both. They embraced the culture and
          wore a smile while elaborating on why Procore was the best company to
          work for and how excited they were to make an impact. They were on
          small, stable, and visible teams who were vastly preferred by the
          team-based budgeting structure. Or, of course, they were opportunistic
          new hires who would be paid 50% more for the exact same position.
          Salary bands, by the way, were entirely defined by your starting
          salary—meaning it would've taken me a decade to reach the six-figure
          income many of my peers were already earning. And though the idea of
          department transfers was publicly touted as a possibility, my dream of
          transferring to engineering was never entertained with even an
          interview.
        </p>

        <p>
          Being close to the numbers, I knew the ugly truth. 90% of the
          attributable revenue flowed through the team I was on. 60% flowed
          through my direct role in the form of search engine traffic. Of
          course, it was a team effort to generate this traffic. That would not
          have been possible without the incredible work of the many talented
          people who built Procore's brand. But, my team was collectively
          overworked and underpaid, despite producing real, measurable results.
          Meanwhile, I would watch as other team's campaigns would cost upwards
          of a hundred thousand dollars to produce less than a thousand visitors
          and yet they were celebrated and handsomely rewarded. It became
          abundantly clear that the department's incentives were deeply and
          chronically misaligned, so I quietly began planning my exit.
        </p>

        <p>
          I owe a lot to the third manager I had while working at Procore. He
          truly valued my contributions and empathized with my unrepresentative
          compensation. He went to bat for me and secured me a generous equity
          award. Amortized over my four years, I still didn't break a six figure
          salary, but I am eternally grateful for him and he has remained a
          generous and loyal friend to this day. Despite this, it was too
          little, too late, and my motivation had withered. I stopped working
          60-hour weeks and I waited as the last of my shares vested. I joined a
          coding bootcamp and materialized the career I had been chasing. I was
          an engineer—dammit.
        </p>

        <p>
          Ultimately, I am responsible for my lack of success at Procore. My
          inexperience, my eagerness, and my distaste for politics left me
          woefully unprepared for corporate realities. This would've been true
          at nearly any company. And in the end, I grew. Watching a company
          triple in size over four years and exit through an IPO exposed me to
          invaluable experiences. Learning to evaluate a department's efficacy
          and seeing how structural misalignment results in poor incentives are
          skills that I will carry throughout my career.
        </p>

        <p>
          It was frustrating. It was exciting. It was fun. It was real. It
          molded me and awoke a deep desire I had long nurtured. I am meant to
          be a founder. I am not like most people and this is my strength. I
          have a broad technical skill set, insatiable curiosity, unusual risk
          tolerance, and an unreasonable streak of individualism—along with
          indefatigable determination. Since leaving Procore, I have found
          immense pleasure in founding my own companies and finding my own work.
          This has been a period of enormous personal growth. I am more
          comfortable, happy, and grounded than I have ever been. My life is
          full now. The insecurity that underlay so many of my interpersonal
          deficiencies is slowly fading. My goal is to build an asset that earns
          me money while I sleep. Once I achieve this, I can dedicate my time
          towards building and sharing the knowledge of how others can do the
          same.
        </p>

        <p>
          Goodbye, Procore. Thank you for shaping me into who I am, for giving
          an unusual, inexperienced young man a front-row seat to the chaotic
          reality of hypergrowth. It awoke something in me that will never fade.
        </p>
      </div>
    </>
  );
}
