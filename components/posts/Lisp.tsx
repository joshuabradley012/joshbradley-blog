import { BlockCode, InlineCode } from "@/components/ui/Code";
import { H2, H3 } from "@/components/ui/Headings";
import { BlockMath, InlineMath } from "@/components/ui/Math";
import LineChart from "@/components/ui/LineChart";
import CounterDemo from "@/components/demos/CounterDemo";
import LoadWrapper from "@/components/LoadWrapper";
import BlockQuote from "@/components/ui/BlockQuote";
import Figure from "@/components/ui/Figure";
import { Ul, Ol, Li } from "@/components/ui/List";
import InlineLink from "@/components/ui/InlineLink";
import OGImage from "@/public/og-image.png";
import {
  FootnotesProvider,
  FootnoteLink,
  Footnotes,
} from "@/components/ui/Footnotes";

const footnotes = [
  {
    id: 1,
    content: (
      <>
        Sinclair Target.{" "}
        <InlineLink href="https://twobithistory.org/2018/10/14/lisp.html">
          "How Lisp Became God's Own Programming Language"
        </InlineLink>
        , Two Bit History, October 14, 2018, accessed April 3, 2020
      </>
    ),
  },
];

export default function Lisp() {
  return (
    <FootnotesProvider footnotes={footnotes}>
      <LoadWrapper>
        <div className="space-y-4">
          <p>
            Paul Graham describes LISP as the convergence point for all
            programming languages. His observation is that as languages mature,
            the average language continues to slide towards LISP. Therefore
            understanding LISP is to understand the fundamental model of modern
            programming.
          </p>
          <p>
            Others tout LISP as necessary to becoming a better programmer. Eric
            Raymond went so far as to say that understanding LISP is a "profound
            enlightenment experience."
          </p>
          <p>
            In search of this understanding, I went to the source. John
            McCarthy's original paper{" "}
            <InlineLink href="https://www-formal.stanford.edu/jmc/recursive/recursive.html">
              Recursive Functions of Symbolic Expressions and Their Computation
              by Machine
            </InlineLink>{" "}
            that laid the foundation for LISP.
          </p>
          <p>
            It is a dense, exploratory paper written by a genius for early
            computer scientists. Not a digestible piece of documentation meant
            to guide others to understanding LISP. I struggled through each
            sentence before stumbling upon Paul Graham's article{" "}
            <InlineLink href="https://www.paulgraham.com/rootsoflisp.html">
              The Roots of LISP
            </InlineLink>
            . His clarity helped guide me to that elusive sense of
            understanding.
          </p>
          <p>
            But it wasn't until I wrote this article that I gained a full grasp
            of the language and its power. I'm leaving my steps here for any who
            have gone down a similar path and still struggle to understand.
          </p>
          <p>
            Keeping true to Paul Graham, I implemented this version of LISP in{" "}
            <InlineLink href="http://www.arclanguage.org/tut.txt">
              Arc
            </InlineLink>
            . You can find the full code{" "}
            <InlineLink href="https://gist.github.com/joshuabradley012/d8e86fcbabac04b230b37e0f173259f5">
              here
            </InlineLink>
            .
          </p>

          <H2>List expressions</H2>
          <p>
            Originally, John McCarthy had defined symbolic expressions
            (S-expressions) and meta expressions (M-expressions). S-expressions
            were to contain lists of symbols, while M-expressions were to denote
            functions.
          </p>

          <BlockCode
            code={`
\`\`\`lisp
; S-expression
((ab . c) d . nil)

; M-expression
eq[x x]
\`\`\`
          `}
          />

          <p>
            However, the computer they used to first implement LISP was missing
            square brackets, so everything was written in S-expression notation.
            <FootnoteLink id={1} /> Dots were omitted and the{" "}
            <InlineCode code="`nil{:lisp}`" /> that terminates lists is assumed.
          </p>
          <p>So the above M-expression becomes:</p>

          <BlockCode
            code={`
\`\`\`lisp
(eq x x)
\`\`\`
          `}
          />

          <p>
            This became the standard syntax for LISP, making the language
            syntactically uniform.
          </p>

          <H2>Elementary functions</H2>
          <p>
            There are very few elementary functions necessary to make LISP a
            complete language. Many complexities, such as memory allocation and
            garbage collection, are handled by the compiler.
          </p>
          <p>
            A brief introduction to the syntax of LISP is helpful because some
            aspects are not intuitive. In particular, quotes and inside-out
            evaluation.
          </p>
          <p>
            Quotes are necessary for LISP because there is no separation of data
            and code. Sequences of characters can be interpreted as variables or
            values depending on their context. Quoting characters solves this by
            forcing a literal interpretation of values.
          </p>
          <p>
            Without <InlineCode code="`quote{:lisp}`" />,{" "}
            <InlineCode code="`(eq x x){:lisp}`" /> will attempt to find the
            defined value of <InlineCode code="`x{:lisp}`" /> and throw an error
            if not found. While <InlineCode code="`(eq 'x 'x){:lisp}`" />{" "}
            returns <InlineCode code="`t{:lisp}`" />. Keep in mind this is
            shorthand for{" "}
            <InlineCode code="`(eq (quote x) (quote x)){:lisp}`" />.
          </p>
          <p>
            Inside-out interpretation feels very unnatural because we are
            trained to read left-to-right, even in programming languages. When
            reading expressions such as{" "}
            <InlineCode code="`(outer (inner '(a b))){:lisp}`" /> you might
            expect <InlineCode code="`outer{:lisp}`" /> to be evaluated first.
            However, <InlineCode code="`inner{:lisp}`" /> will be the first to
            evaluate.
          </p>
          <p>
            Armed with this basic understanding, you're ready for the 5
            elementary functions necessary for LISP.
          </p>

          <H3 className="font-mono">atom</H3>
          <p>Checks if an element is a single symbol.</p>

          <BlockCode
            code={`
\`\`\`lisp
(atom 'x)
; returns t

(atom '(a b))
; returns nil
\`\`\`
          `}
          />

          <H3 className="font-mono">eq</H3>
          <p>
            Checks if two atomic symbols are the same. In Arc, this is written
            as <InlineCode code="`is{:lisp}`" />.
          </p>

          <BlockCode
            code={`
\`\`\`lisp
(eq 'x 'x)
; returns t

(eq 'x 'y)
; returns nil

(eq '(a b) '(a b))
; (a b) is a list and cannot be evaluated by eq
; returns nil
\`\`\`
          `}
          />

          <H3 className="font-mono">car</H3>
          <p>
            Stands for "contents of the address register." It returns the first
            item in a list, as long as it isn't atomic.
          </p>

          <BlockCode
            code={`
\`\`\`lisp
(car '(x a))
; returns x

(car '((x a) y))
; returns (x a)
\`\`\`
          `}
          />

          <H3 className="font-mono">cdr</H3>
          <p>
            Stands for "contents of the decrement register." It returns
            everything after the first item in a list.
          </p>

          <BlockCode
            code={`
\`\`\`lisp
(cdr '(x a))
; returns (a)

(cdr '((x a) y))
; returns (y)

(cdr '((x a) (y b)))
; returns ((y b))
\`\`\`
          `}
          />

          <H3 className="font-mono">cons</H3>
          <p>Is used to construct a list from atoms or other lists.</p>

          <BlockCode
            code={`
\`\`\`lisp
(cons 'x 'a)
; returns (x . a)
; lists should typically end in nil
; so it is better to write (cons x (cons a nil))
; which returns (x . a . nil)
; and can be written as (x a)

(cons '(x a) 'y)
; returns ((x a) . y)

(cons '(x a) '(y b))
; returns ((x a) y b)
\`\`\`
          `}
          />

          <H2>Foundational functions</H2>

          <Footnotes />
        </div>
      </LoadWrapper>
    </FootnotesProvider>
  );
}
