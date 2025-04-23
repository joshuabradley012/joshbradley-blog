import { PostHeader } from "@/components/ui/PostHeader";
import BlogJsonLd from "@/components/ui/BlogJsonLd";
import { createMetadata } from "@/lib/metadata";
import { getPostBySlug } from "@/lib/posts";
import { H2 } from "@/components/ui/Headings";

const post = getPostBySlug("lessons-on-startups");

export async function generateMetadata() {
  return createMetadata(post);
}

export default function LessonsOnStartups() {
  return (
    <>
      <BlogJsonLd post={post} />
      <PostHeader post={post} />
      <div className="space-y-4">
        <p>
          I'm learning hard lessons while building <strong>Celest</strong>, an
          AI-driven software for content creation. My goal is to create an
          interface that AI can use <em>alongside</em> a user. It's pushing the
          limits of my ability and helping me grow—both as an engineer and as a
          person. Here's what I've learned:
        </p>

        <H2>Projects are always 80% complete</H2>
        <p>
          The finish line always feels close, but it never quite arrives. You
          are building something that will evolve and grow. No matter how many
          deadlines you set, hit, or miss—the work remains constant.
        </p>

        <H2>The last 10% takes 90% of your effort</H2>
        <p>
          The closer you get to finishing, the harder it becomes. The beginning
          of a project feels great because there's no resistance. As it grows,
          everything must be built in consideration of everything else. The
          friction compounds. The edge of a problem is sparse and wide—and it
          takes effort to traverse.
        </p>

        <H2>Composition is powerful</H2>
        <p>
          I've stopped chasing perfect abstractions. Now I create flexible,
          reusable blocks of code and compose those blocks into unique patterns.
          I relate this to making music: twelve simple notes can combine into
          nearly infinite arrangements of chords and melodies. Their beauty lies
          in simplicity and harmony. Great code is the same—it's simple enough
          to enable powerful combinations, and expressive enough to handle
          complexity.
        </p>

        <H2>Don't reinvent the wheel</H2>
        <p>
          Many common challenges have already been solved. If you need something
          to roll, and a wheel exists, use it. Don't waste your talent—go build
          something new.
        </p>

        <H2>Always improve the factory</H2>
        <p>
          Construct a factory that produces high-quality products: modular,
          extensible, and easy to upgrade. Actively keep the factory clean,
          organized, and up to date. This is the kind of work that compounds. It
          can be reused across projects, refined over time, and give you a real
          edge over your competitors.
        </p>

        <H2>Be a perfectionist</H2>
        <p>
          Focus on your core product offering, and perfect it. Your first
          impression defines your brand. It has to be unforgettable. Stay
          focused on the single <em>aha moment</em> you need to create.
        </p>

        <H2>Doing is knowing</H2>
        <p>
          Conceptual understanding is no substitute for practical experience.
          Knowledge lives in the mind until it is practiced—then it becomes
          embedded as skill. Doing humbles your tongue and sharpens your
          perception.
        </p>

        <H2>Do until it's done</H2>
        <p>
          There's a lot that goes into building a production-grade application.
          There is no shortcut to doing it well—it may take years. Make sure
          your lifestyle and circumstances support that kind of long-term
          effort.
        </p>

        <H2>Do it your way</H2>
        <p>
          Surrender to your own way of being and find your optimal flow.
          Everyone works differently, and no book can teach you how to be{" "}
          <em>you</em>. The greatest things are created by people relentlessly
          pursuing their interests. Your path is guaranteed to be unique. The
          important part is getting started. Start building. Start learning.
          Start improving every area of your life.
        </p>

        <p>
          The goal is to live a good life. Building a great business is just a
          part of that.
        </p>
      </div>
    </>
  );
}
