import { BlockCode, InlineCode } from "@/components/ui/Code";
import { H2, H3 } from "@/components/ui/Headings";
import BlockQuote from "@/components/ui/BlockQuote";
import Figure from "@/components/ui/Figure";
import { Ol, Li } from "@/components/ui/List";
import InlineLink from "@/components/ui/InlineLink";

export default function Build() {
  return (
    <div className="space-y-4">
      <div className="my-8 border border-blue-200 bg-blue-50 px-6 py-4 text-blue-700">
        <p>
          This article is out of date and no longer reflects how this website is
          built. I've kept the original article because this was one of the
          first public things I made, and I am proud of it. I've since written
          about{" "}
          <InlineLink href="/thoughts/rebuilding-this-website">
            how I rebuilt this website
          </InlineLink>
          .
        </p>
      </div>
      <p>
        This website is <em>fast</em>. The homepage loads in 50ms and is only
        9KB (after GZIP and caching).
      </p>

      <p>
        Google Analytics is 17.7KB,{" "}
        <InlineLink href="https://abs.twimg.com/responsive-web/web/heart_animation.5c9f8e84.png">
          this PNG
        </InlineLink>{" "}
        Twitter uses is 10KB, and blinking takes 100-400ms.
      </p>

      <p>
        There were sacrifices. But it is an example of what websites could be in
        stark contrast with what they have become.
      </p>

      <H2>Why speed matters</H2>
      <p>
        Reality has no latency. Things <em>feel</em> wrong when there is a delay
        between our actions and their response. Speed is the most important
        aspect of user experience.
      </p>

      <p>
        But as computers have become more powerful, they haven't gotten faster.
        They're bloated.
      </p>

      <p>
        In a{" "}
        <InlineLink href="https://tonsky.me/blog/disenchantment/">
          magnificent rant
        </InlineLink>
        , Nikkita Tonsky wrote:
      </p>

      <BlockQuote>
        <p>
          Windows 95 was 30MB. Today we have web pages heavier than that!
          Windows 10 is 4GB, which is 133 times as big. But is it 133 times as
          superior?
        </p>
      </BlockQuote>

      <p>
        Frameworks like React address speed by controlling the DOM. At the cost
        of 100KB of JavaScript, wasted CPU cycles, and complexity.
      </p>

      <p>
        Static HTML is the soul of the internet. It is ubiquitous, easy to
        understand, and easy for search engines to crawl. It is the ideal format
        for any website. Just look at{" "}
        <InlineLink href="https://motherfuckingwebsite.com/">
          this f*@king website
        </InlineLink>
        .
      </p>

      <p>
        While I wasn't as extreme, this website is pretty close. And I love it.
      </p>

      <H2>Design choices</H2>
      <p>
        There are no frameworks, web fonts, or libraries on this website.
        Everything was handwritten. If it didn't improve the user experience, it
        wasn't included.
      </p>

      <p>
        In particular, there aren't any analytics on this page. If I want to
        know traffic metrics and snoop IP addresses, I can check the server
        logs. I'm not going to invade your privacy with an inconvenient script.
        Or feed more data to our Google overlord.
      </p>

      <p>
        I'm inspired by{" "}
        <InlineLink href="http://www.paulgraham.com/articles.html">
          Paul Graham
        </InlineLink>{" "}
        and{" "}
        <InlineLink href="https://daringfireball.net/">
          John Gruber's
        </InlineLink>{" "}
        simplicity. I learned typography from{" "}
        <InlineLink href="https://seths.blog/">Seth Godin</InlineLink>,{" "}
        <InlineLink href="https://practicaltypography.com/">
          Butterick's Practical Typography
        </InlineLink>
        , and{" "}
        <InlineLink href="https://www.nytimes.com/">
          The New York Times
        </InlineLink>
        . I hoped to capture their mastery.
      </p>

      <p>This design intends to last.</p>

      <H2>The stack</H2>
      <Ol>
        <Li>Hugo</Li>
        <Li>Static assets</Li>
        <Li>Custom SCSS</Li>
        <Li>Minimal JavaScript</Li>
        <Li>A ServiceWorker</Li>
        <Li>AWS hosting</Li>
      </Ol>

      <p>
        Check out the{" "}
        <InlineLink href="https://github.com/joshuabradley012/joshbradley-hugo">
          repo
        </InlineLink>{" "}
        (I'll turn it into a theme at some point).
      </p>

      <H3>Hugo</H3>
      <p>
        I chose Hugo because of the control and productivity it provides. I was
        able to create a minimal, semantic structure laden with{" "}
        <InlineLink href="https://schema.org/">schema markup</InlineLink>.
      </p>

      <p>
        Hugo's ability to generate and minify assets in any language removed my
        need for build tools. Keeping my codebase uniform, simple, and fast.
      </p>

      <p>
        In this case, I used it to build an array of cacheable pages for a
        ServiceWorker.
      </p>

      <BlockCode
        meta={`javascript title="Array in ServiceWorker"`}
        code={`
const pagesToCache = [
{{ with .Site.Pages }}
  {{ range  (where . "Type" "page") }}
    '{{ .RelPermalink }}',
  {{ end }}
  {{ range (where . "Kind" "taxonomyTerm") }}
    '{{ .RelPermalink }}',
  {{ end }}
  {{ range (where . "Kind" "taxonomy") }}
    '{{ .RelPermalink }}',
  {{ end }}
  {{ range (where . "Type" "post") }}
    '{{ .RelPermalink }}',
  {{ end }}
{{ end }}
];

self.addEventListener('install', (event) => {
event.waitUntil(
  caches.open('cacheName').then(function(cache) {
    cache.addAll(pagesToCache);
  })
);
});
        `}
      />

      <p>
        With Hugo's power and shallow learning curve, I was able to complete the
        base of this website in one week.
      </p>

      <H3>Static assets</H3>
      <p>
        I mentioned that I didn't use any web fonts. I lied. I created one with{" "}
        <InlineLink href="http://fontello.com/">Fontello</InlineLink> for social
        media icons. Using <InlineCode code="woff2" /> was only 1KB larger than
        SVG icons with better extensibility.
      </p>

      <p>
        Because I handpicked icons, the entire font is only 3.1KB. Compare that
        to FontAwesome's 161KB. Plus another 70-120KB for every font-weight you
        include.
      </p>

      <p>
        The logo is a single path SVG, made on a 16pt grid and minified with one
        decimal precision. The result is 399B.
      </p>

      <p>
        I used Georgia for the body, Helvetica for headings and navigation, and
        Courier for code. These are all{" "}
        <InlineLink href="https://www.cssfontstack.com/">
          websafe fonts
        </InlineLink>
        .
      </p>

      <H3>Custom SCSS</H3>
      <p>
        The layout is very simple, two containers one fixed one relative. I
        didn't need Bootstrap, only a few lines of CSS. I converted my code to
        SCSS while avoiding nested selector hell.
      </p>

      <p>
        I gave special attention to the typography. Using many shades of grey to
        create a subtle balance of contrast. It strives to be easy on the eyes
        while drawing attention to important sections.
      </p>

      <p>
        Everything uses <InlineCode code="rem" /> and <InlineCode code="em" />{" "}
        units for a responsive, accessible design. Vision impaired users can
        adjust this site without disrupting the typography.
      </p>

      <p>The entire theme is configurable with a few variables.</p>

      <BlockCode
        meta={`scss title="Theme SCSS"`}
        code={`
$default-color: #333;

$dark-color: #121212;
$darker-color: #000;

$slightly-light-color: #555;
$light-color: #666;
$lighter-color: #777;
$lightest-color: #999;

$nav-active-background: #f7f7f7;
$code-background: #f0f0f0;

$light-border: #ddd;
$dark-border: #ccc;

$white: #fff;

$main-font: Georgia, serif;
$sub-font: Helvetica, Arial, sans-serif;
$mono-font: Courier, monospace;

$content-width: 46rem;
        `}
      />

      <p>In total, the CSS is 6.4KB (2.3KB after GZIP).</p>

      <H3>Minimal JavaScript</H3>
      <p>
        Aside from the ServiceWorker, this is all I used. A simple click
        listener to toggle the <InlineCode code="nav-open" /> class, and a
        function to lazyload images.
      </p>

      <BlockCode
        meta={`javascript title="Navigation Toggle"`}
        code={`
var navToggle = document.getElementById('nav-toggle');
navToggle.addEventListener('click', function() {
document.body.classList.toggle('nav-open');
});`}
      />

      <BlockCode
        meta={`javascript title="Lazyload"`}
        code={`
window.addEventListener('DOMContentLoaded', lazyload, false);
function lazyload() {
var imgs = document.getElementsByClassName('lazyload');
for (var i = 0; i < imgs.length; i++) {
  var img = imgs[i];
  if (img.nodeName === 'IMG') {
    img.addEventListener('load', function() { this.className += ' loaded' });
    img.dataset.src ? img.src = img.dataset.src : null;
    img.dataset.srcset ? img.srcset = img.dataset.srcset : null;
  } else {
    img.dataset.src ? img.style.backgroundImage = 'url(' + img.dataset.src + ')' : null;
  }
}
}
        `}
      />

      <H3>A ServiceWorker</H3>
      <p>
        Creating a ServiceWorker was the most complex piece of this website. It
        took me about 1/3<sup>rd</sup> of the total development time, but it was
        worth learning.
      </p>

      <p>
        I could have kept it simple. The "stale-while-revalidate" pattern
        outlined in{" "}
        <InlineLink href="https://developers.google.com/web/fundamentals/instant-and-offline/offline-cookbook">
          Google's Offline Cookbook
        </InlineLink>{" "}
        would have been enough. You might have picked up, I rarely do things the
        easy way.
      </p>

      <p>
        Instead, there are three different cache patterns. The first load
        imports all assets. Then the ServiceWorker takes control.
      </p>

      <p>
        Static assets are the simplest, they respond from the cache with a
        fallback to the network. That way the network isn't called until the
        cache is invalid.
      </p>

      <BlockCode
        meta={`javascript title="Cache with network fallback"`}
        code={`
self.addEventListener('fetch', (event) => {
event.respondWith(
  caches.match(normalizedUrl).then(function(response) {
    return response || fetch(event.request);
  })
);
});
        `}
      />

      <p>
        Pages have a more complex pattern, imitating HTTP's
        "stale-while-revalidate" policy. The user experiences an instant load
        while the resource updates for the next visit.
      </p>

      <BlockCode
        meta={`javascript title="Stale-while-revalidate"`}
        code={`
self.addEventListener('fetch', (event) => {
const normalizedUrl = new URL(event.request.url);
normalizedUrl.search = '';
event.respondWith(
  caches.open(cacheName).then((cache) => {
    return cache.match(normalizedUrl).then((response) => {
      let fetchPromise = fetch(normalizedUrl).then((networkResponse) => {
        cache.put(normalizedUrl, networkResponse.clone());
        return networkResponse;
      });
      return response || fetchPromise;
    });
  })
);
});
        `}
      />

      <p>
        The pièce de résistance, a cache then update with network policy within
        static HTML. Keeping the homepage fresh.
      </p>

      <p>The pattern goes like this:</p>

      <Figure
        src="/images/cache-then-network.svg"
        alt="Cache then network diagram"
        caption="Cache then network diagram"
        imgClassName="p-4"
        width={460}
        height={338}
      />

      <p>
        You can find the source code in the{" "}
        <InlineLink href="https://github.com/joshuabradley012/joshbradley-hugo/tree/master/assets/js">
          repo
        </InlineLink>
        .
      </p>

      <H3>AWS hosting</H3>
      <p>
        This is an S3 bucket served through Cloudfront routed through a Route53
        domain. It sounds simple but learning AWS is intimidating. Their
        platform is dense and prickly.
      </p>

      <p>Here is some helpful documentation:</p>

      <Ol>
        <Li>
          <InlineLink href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/registrar-tld-list.html">
            Domain names you can register with Route53
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://docs.aws.amazon.com/Route53/latest/DeveloperGuide/routing-to-cloudfront-distribution.html">
            Routing Route53 to Cloudfront
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://aws.amazon.com/premiumsupport/knowledge-center/cloudfront-serve-static-website/">
            Serving a static S3 website with Cloudfront
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://stevepapa.com/how-to-specify-a-default-root-object-for-static-website-subdirectories-on-aws-cloudfront/">
            Allowing directory paths with S3 and Cloudfront (without a Lambda)
          </InlineLink>
        </Li>
        <Li>
          Setting up the AWS CLI (for Hugo deployments){" "}
          <InlineLink href="https://docs.aws.amazon.com/cli/latest/userguide/install-cliv2-mac.html">
            install
          </InlineLink>{" "}
          and{" "}
          <InlineLink href="https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-files.html">
            credentials
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Invalidation.html">
            Invalidating Cloudfront
          </InlineLink>
        </Li>
        <Li>
          <InlineLink href="https://stackoverflow.com/questions/10435334/set-cache-control-for-entire-s3-bucket-automatically-using-bucket-policies">
            Setting cache control on all S3 items
          </InlineLink>
        </Li>
      </Ol>

      <p>
        I also created an email with SES (Simple Email Service) that routes
        messages to my Gmail. An S3 bucket stores emails and a Lambda function
        sends them.{" "}
        <InlineLink href="http://www.daniloaz.com/en/use-gmail-with-your-own-domain-for-free-thanks-to-amazon-ses-lambda/">
          Daniel Lopez
        </InlineLink>{" "}
        has a useful guide.
      </p>

      <p>
        The only expense is my domain name. When I start to get traffic, I can
        scale for cheap.
      </p>

      <H2>The result</H2>
      <p>This page gets a perfect 100 for performance in Chrome Lighthouse.</p>

      <p>
        SEO and best practices are at 100, and it's a PWA. Accessibility scored
        a 93 because of the light grey used in meta data. If I were to add a
        contrast option, it would be a "perfect" website.
      </p>

      <p>
        Chasing arbitrary numbers is pointless without purpose. This wasn't
        pointless. This website achieves everything I need and does it cleanly.
        The user experience is pristine. The typography is delightful. The
        structure is meaningful.
      </p>

      <p>Good design is less design.</p>
    </div>
  );
}
