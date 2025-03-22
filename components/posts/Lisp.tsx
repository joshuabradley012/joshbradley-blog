import { BlockCode, InlineCode } from "@/components/ui/Code";
import { H2, H3 } from "@/components/ui/Headings";
import LoadWrapper from "@/components/LoadWrapper";
import InlineLink from "@/components/ui/InlineLink";
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
            Raymond went so far as to say that understanding LISP is a{" "}
            <q>profound enlightenment experience.</q>
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
            code={`; S-expression
((ab . c) d . nil)

; M-expression
eq[x x]`}
            meta="lisp"
          />

          <p>
            However, the computer they used to first implement LISP was missing
            square brackets, so everything was written in S-expression notation.
            <FootnoteLink id={1} /> Dots were omitted and the{" "}
            <InlineCode code="nil{:lisp}" /> that terminates lists is assumed.
          </p>
          <p>So the above M-expression becomes:</p>

          <BlockCode code={`(eq x x)`} meta="lisp" />

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
            Without <InlineCode meta="lisp" code="quote" />,{" "}
            <InlineCode meta="lisp" code="(eq x x)" /> will attempt to find the
            defined value of <InlineCode meta="lisp" code="x" /> and throw an
            error if not found. While{" "}
            <InlineCode meta="lisp" code="(eq 'x 'x)" /> returns{" "}
            <InlineCode meta="lisp" code="t" />. Keep in mind this is shorthand
            for <InlineCode meta="lisp" code="(eq (quote x) (quote x))" />.
          </p>
          <p>
            Inside-out interpretation feels very unnatural because we are
            trained to read left-to-right, even in programming languages. When
            reading expressions such as{" "}
            <InlineCode meta="lisp" code="(outer (inner '(a b)))" /> you might
            expect <InlineCode meta="lisp" code="outer" /> to be evaluated
            first. However, <InlineCode meta="lisp" code="inner" /> will be the
            first to evaluate.
          </p>
          <p>
            Armed with this basic understanding, you're ready for the 5
            elementary functions necessary for LISP.
          </p>

          <H3 className="font-mono">atom</H3>
          <p>Checks if an element is a single symbol.</p>

          <BlockCode
            code={`(atom 'x)
; returns t

(atom '(a b))
; returns nil`}
            meta="lisp"
          />

          <H3 className="font-mono">eq</H3>
          <p>
            Checks if two atomic symbols are the same. In Arc, this is written
            as <InlineCode code="is{:lisp}" />.
          </p>

          <BlockCode
            code={`(eq 'x 'x)
; returns t

(eq 'x 'y)
; returns nil

(eq '(a b) '(a b))
; (a b) is a list and cannot be evaluated by eq
; returns nil`}
            meta="lisp"
          />

          <H3 className="font-mono">car</H3>
          <p>
            Stands for "contents of the address register." It returns the first
            item in a list, as long as it isn't atomic.
          </p>

          <BlockCode
            code={`(car '(x a))
; returns x

(car '((x a) y))
; returns (x a)`}
            meta="lisp"
          />

          <H3 className="font-mono">cdr</H3>
          <p>
            Stands for "contents of the decrement register." It returns
            everything after the first item in a list.
          </p>

          <BlockCode
            code={`(cdr '(x a))
; returns (a)

(cdr '((x a) y))
; returns (y)

(cdr '((x a) (y b)))
; returns ((y b))`}
            meta="lisp"
          />

          <H3 className="font-mono">cons</H3>
          <p>Is used to construct a list from atoms or other lists.</p>

          <BlockCode
            code={`(cons 'x 'a)
; returns (x . a)
; lists should typically end in nil
; so it is better to write (cons x (cons a nil))
; which returns (x . a . nil)
; and can be written as (x a)

(cons '(x a) 'y)
; returns ((x a) . y)

(cons '(x a) '(y b))
; returns ((x a) y b)`}
            meta="lisp"
          />

          <H2>Foundational functions</H2>
          <p>
            These functions form the core of the "universal function" which is
            the ultimate end of this implementation.
          </p>

          <p>
            Because I am implementing this in Arc, I will be moving away from
            John McCarthy's use of = to define functions and{" "}
            <InlineCode code="[condition -> expression; T -> expression]" />{" "}
            syntax for <InlineCode meta="lisp" code="if...else" /> conditions.
            Instead, I will use <InlineCode meta="lisp" code="def" /> and{" "}
            <InlineCode meta="lisp" code="if" /> as defined in Arc.
          </p>
          <p>
            Other differences include using <InlineCode meta="lisp" code="is" />{" "}
            for <InlineCode meta="lisp" code="eq" /> and I will prefix all
            functions with <InlineCode meta="lisp" code="_" /> to avoid
            conflicts with existing functions. Additionally,{" "}
            <InlineCode meta="lisp" code="t" /> represents truth and{" "}
            <InlineCode meta="lisp" code="nil" /> represents falsity.
          </p>

          <p>
            If you have trouble following the syntax, I suggest reading Paul
            Graham's{" "}
            <InlineLink href="http://www.arclanguage.org/tut.txt">
              Arc tutorial
            </InlineLink>{" "}
            first.
          </p>

          <H3 className="font-mono">_null</H3>
          <p>Evaluates if the expression is empty.</p>

          <BlockCode
            code={`(def _null (x)
  (is x nil))

(_null nil)
; returns t

(_null '(x a))
; returns nil`}
            meta="lisp"
          />

          <H3 className="font-mono">_and</H3>
          <p>
            Evaluates if both conditions are true. In Arc,{" "}
            <InlineCode meta="lisp" code="t" /> represents true, and{" "}
            <InlineCode meta="lisp" code="nil" /> represents false.
          </p>

          <BlockCode
            code={`(def _and (x y)
  (if (is x t) (is y t) t nil))

(_and 'x 'y)
; returns t

(_and 'x nil)
; returns nil`}
            meta="lisp"
          />

          <H3 className="font-mono">_not</H3>
          <p>
            Evaluates if the condition is <InlineCode meta="lisp" code="nil" />.
          </p>

          <BlockCode
            code={`(def _not (x)
  (if (is x nil) t))

(_not nil)
; returns t

(_not 'x)
; returns nil`}
            meta="lisp"
          />

          <H3 className="font-mono">
            _caar, _cadr, _caddr, _cadar, <span className="font-sans">and</span>{" "}
            _caddar
          </H3>
          <p>
            These are shorthand for combinations of{" "}
            <InlineCode meta="lisp" code="car" /> and{" "}
            <InlineCode meta="lisp" code="cdr" />. They occur often so the
            shorthand keeps your code DRY.
          </p>

          <BlockCode
            code={`(def _caar (x)
  (car (car x)))

(def _cadr (x)
  (car (cdr x)))

(def _cadar (x)
  (car (cdr (car x))))

(def _caddr (x)
  (car (cdr (cdr x))))

(def _caddar (x)
  (car (cdr (cdr (car x)))))

(_cadr '(a b c d))
; returns b

(_caddr '(a b c d))
; returns c

(_cadar '((a b c d) (e f g)))
; returns b

(_caddar '((a b c d) (e f g)))
; returns c`}
            meta="lisp"
          />

          <H3 className="font-mono">_append</H3>
          <p>Allows you to join lists.</p>

          <BlockCode
            code={`(def _append (x y)
  (if (_null x) y (cons (car x) (_append (cdr x) y))))

(_append '(a b) '(c d))
; returns (a b c d)`}
            meta="lisp"
          />

          <H3 className="font-mono">_list</H3>
          <p>
            Creates a list from two expressions. The distinction between this
            and <InlineCode meta="lisp" code="cons" /> is that{" "}
            <InlineCode meta="lisp" code="_list" /> will append{" "}
            <InlineCode meta="lisp" code="nil" /> for you.
          </p>

          <p>
            This maintains the integrity of lists that you pass as arguments and
            removes the need for an additional{" "}
            <InlineCode meta="lisp" code="cons" /> when joining two atoms.
          </p>

          <BlockCode
            code={`(def _list (x y)
  (cons x (cons y nil)))

(_list 'a 'b)
; returns (a b)

(_list '(a b) '(c d))
; returns ((a b) (c d))`}
            meta="lisp"
          />

          <H3 className="font-mono">_pair</H3>
          <p>
            Joins two lists creating pairs based on the position of each
            element.
          </p>

          <BlockCode
            code={`(def _pair (x y)
  (if (_and (_null x) (_null y)) nil
      (_and (_not (atom x)) (_not (atom y)))
      (cons (_list (car x) (car y))
            (_pair (cdr x) (cdr y)))))

(_pair '(x y z) '(a b c))
; returns ((x a) (y b) (z c))`}
            meta="lisp"
          />

          <H3 className="font-mono">_assoc</H3>
          <p>
            Gets values from key-value pairs, where the first argument is the
            key and the second argument is a list of pairs.
          </p>

          <BlockCode
            code={`(def _assoc (x y)
  (if (is (caar y) x) (_cadar y)
    (_assoc x (cdr y))))

(_assoc 'y '((x a) (y b)))
; returns b

(_assoc 'x '((w (a b)) (x (c d)) (y (e f))))
; returns (c d)`}
            meta="lisp"
          />

          <H2>The universal function</H2>
          <p>
            The true power of LISP is its ability to evaluate itself from a few
            building blocks. As John McCarthy did, we will be defining{" "}
            <InlineCode meta="lisp" code="_eval" /> which can evaluate LISP in
            LISP.
          </p>

          <p>
            This is the most surprising and powerful aspect of the language.
            With 5 primitives and 12 functions, you have the building blocks to
            build an interpreter.
          </p>

          <BlockCode
            code={`(def _eval (e a)
  (if
    (atom e) (_assoc e a)
    (atom (car e)) (if
      (is (car e) 'quote) (_cadr e)
      (is (car e) 'atom)  (atom (_eval (_cadr  e) a))
      (is (car e) 'eq)    (is   (_eval (_cadr  e) a)
                                (_eval (_caddr e) a))
      (is (car e) 'car)   (car  (_eval (_cadr  e) a))
      (is (car e) 'cdr)   (cdr  (_eval (_cadr  e) a))
      (is (car e) 'cons)  (cons (_eval (_cadr  e) a)
                                (_eval (_caddr e) a))
      (is (car e) 'cond)  (_evcon (cdr e) a)
      (_eval (cons (_assoc (car e) a)
                   (cdr e))
             a))
    (is (caar e) 'label)
      (_eval (cons (_caddar e) (cdr e))
             (cons (_list (_cadar e) (car e)) a))
    (is (caar e) 'lambda)
      (_eval (_caddar e)
             (_append (_pair (_cadar e) (_evlis (cdr e) a))
                      a))))

(def _evcon (c a)
  (if (_eval (_caar c) a)
      (_eval (_cadar c) a)
      (_evcon (cdr c) a)))

(def _evlis (m a)
  (if (_null m) nil
      (cons (_eval  (car m) a)
            (_evlis (cdr m) a))))`}
            meta="lisp"
          />

          <p>
            When using <InlineCode meta="lisp" code="_eval" /> the syntax of the
            contained expressions will be specific to the interpreter. We aren't
            writing in Arc anymore, but a completely new language. The primitive
            form of LISP.
          </p>

          <p>
            Even if you have been following along, there is a lot to break down
            here, so let's step through it.
          </p>

          <H3>Interpreting elementary functions</H3>
          <p>
            <InlineCode meta="lisp" code="_eval" /> takes{" "}
            <InlineCode meta="lisp" code="e" /> as the expression to be
            evaluated and <InlineCode meta="lisp" code="a" /> as a list of pairs
            that will be referenced by <InlineCode meta="lisp" code="e" />.
          </p>

          <p>
            If <InlineCode meta="lisp" code="e" /> is atomic{" "}
            <InlineCode meta="lisp" code="_assoc" /> is called to return the
            value that matches the key <InlineCode meta="lisp" code="e" /> in{" "}
            <InlineCode meta="lisp" code="a" />.
          </p>

          <BlockCode
            code={`(_eval 'x '((x a) (y b)))
; returns a

(_eval 'y '((x a) (y b)))
; returns b`}
            meta="lisp"
          />

          <p>
            If <InlineCode meta="lisp" code="e" /> is not atomic, then{" "}
            <InlineCode meta="lisp" code="_eval" /> checks if the first element
            of <InlineCode meta="lisp" code="e" /> is one of the elementary
            functions.
          </p>

          <p>
            In the case of <InlineCode meta="lisp" code="quote" /> the symbol
            following <InlineCode meta="lisp" code="quote" /> is returned
            literally.
          </p>

          <BlockCode
            code={`(_eval '(quote x) nil)
; nil is needed because _eval requires two arguments
; returns x

(_eval '(quote (x a)) nil)
; returns (x a)`}
            meta="lisp"
          />

          <p>
            With other elementary functions, <InlineCode meta="lisp" code="e" />{" "}
            takes the form <InlineCode meta="lisp" code="(function key)" />,
            where <InlineCode meta="lisp" code="key" /> is used to get a value
            from <InlineCode meta="lisp" code="a" /> that will be evaluated by{" "}
            <InlineCode meta="lisp" code="function" />.
          </p>

          <p>
            The following use of <InlineCode meta="lisp" code="_eval" /> is
            equivalent to the much simpler{" "}
            <InlineCode meta="lisp" code="(atom 'y)" /> but it is core to
            understanding the <InlineCode meta="lisp" code="_eval" /> function.
            Notice how <InlineCode meta="lisp" code="x" /> is being used to
            reference the value in the second parameter,{" "}
            <InlineCode meta="lisp" code="a" />.
          </p>

          <BlockCode
            code={`(_eval '(atom x) '((x y)))
; returns t

(_eval '(atom x) '((x (a b))))
; returns nil`}
            meta="lisp"
          />

          <p>
            For every elementary function except{" "}
            <InlineCode meta="lisp" code="quote" /> there are recursive{" "}
            <InlineCode meta="lisp" code="_eval" /> calls being made until it
            reaches <InlineCode meta="lisp" code="_assoc" /> or{" "}
            <InlineCode meta="lisp" code="quote" />.
          </p>

          <p>
            These are the steps <InlineCode meta="lisp" code="_eval" /> takes to
            evaluate <InlineCode meta="lisp" code="atom" />.
          </p>

          <BlockCode
            code={`(_eval '(atom x) '((x y)))
; (atom (_eval (_cadr e) a))
; (atom (_eval  x ((x y))))
; (atom (_assoc x ((x y))))
; (atom y)
; returns t`}
            meta="lisp"
          />

          <p>
            <InlineCode meta="lisp" code="car" /> and{" "}
            <InlineCode meta="lisp" code="cdr" /> have a very similar structure
            to <InlineCode meta="lisp" code="atom" /> because only one
            expression has to be evaluated.
          </p>

          <BlockCode
            code={`(_eval '(car x) '((x (a b c))))
; returns a

(_eval '(cdr x) '((x (a b c))))
; returns (b c)`}
            meta="lisp"
          />

          <p>
            <InlineCode meta="lisp" code="cons" /> and{" "}
            <InlineCode meta="lisp" code="eq" /> have two expressions that need
            to be evaluated. As such, <InlineCode meta="lisp" code="a" /> needs
            to contain two pairs.
          </p>

          <BlockCode
            code={`(_eval '(eq x y) '((x a) (y a)))
; returns t

(_eval '(cons x y) '((x a) (y b)))
; returns (a . b)`}
            meta="lisp"
          />

          <p>
            <InlineCode meta="lisp" code="cond" /> makes use of a new function,{" "}
            <InlineCode meta="lisp" code="_evcon" /> which takes a list of pairs
            with the format{" "}
            <InlineCode meta="lisp" code="(condition expression)" />. When a
            true condition is found, that expression is evaluated.
          </p>

          <BlockCode
            code={`(def _evcon (c a)
  (if (_eval (_caar c) a)
      (_eval (_cadar c) a)
      (_evcon (cdr c) a)))

(_evcon '(((atom c1) a1) ((atom c2) a2) ((atom c3) a3))
        '((c1 (a b)) (a1 not_atom)
          (c2 (c d)) (a2 still_not_atom)
          (c3 e)     (a3 is_atom)))
; returns is_atom`}
            meta="lisp"
          />

          <p>
            Here is the same expression using{" "}
            <InlineCode meta="lisp" code="_eval" />.
          </p>

          <BlockCode
            code={`(_eval '(cond ((atom c1) a1) ((atom c2) a2) ((atom c3) a3))
       '((c1 (a b)) (a1 not_atom)
         (c2 (c d)) (a2 still_not_atom)
         (c3 e)     (a3 is_atom)))
; returns is_atom`}
            meta="lisp"
          />

          <H3>
            Interpreting <span className="font-mono">label</span> and{" "}
            <span className="font-mono">lambda</span> functions
          </H3>

          <p>
            If <InlineCode meta="lisp" code="e" /> is atomic but isn't an
            elementary function, it must be a{" "}
            <InlineCode meta="lisp" code="label" /> or{" "}
            <InlineCode meta="lisp" code="lambda" /> function defined by the
            user.
          </p>

          <p>
            <InlineCode meta="lisp" code="lambda" /> expressions take the format{" "}
            <InlineCode meta="lisp" code="(lambda (param) (expression) arg)" />{" "}
            where <InlineCode meta="lisp" code="arg" /> will be passed to{" "}
            <InlineCode meta="lisp" code="expression" /> through{" "}
            <InlineCode meta="lisp" code="param" />.
          </p>

          <BlockCode
            code={`(_eval '((lambda (param)
           (cond ((atom param) (quote is_atom))
                 ((quote t)    (quote not_atom))))
          arg)
       '((arg (a b))))
; returns not_atom`}
            meta="lisp"
          />

          <p>
            Note that <InlineCode meta="lisp" code="(quote t)" /> is used here
            as an explicit <InlineCode meta="lisp" code="else" /> condition. Arc
            handles these cases gracefully, but because we are bound to the
            rules of the interpreter we must use this syntax.
          </p>

          <p>
            During evaluation, the above{" "}
            <InlineCode meta="lisp" code="lambda" /> expression becomes
          </p>

          <BlockCode
            code={`(_eval '(cond ((atom param) (quote is_atom))
              ((quote t)    (quote not_atom)))
       '((param (a b)) (arg (a b))))
; returns not_atom`}
          />

          <p>
            Notice how the arguments are extended to contain a pair for{" "}
            <InlineCode meta="lisp" code="param" />. This makes use of the
            supplementary <InlineCode meta="lisp" code="_evlis" /> function
            which recursively constructs a list of pairs from{" "}
            <InlineCode meta="lisp" code="arg" /> for each{" "}
            <InlineCode meta="lisp" code="param" /> in{" "}
            <InlineCode meta="lisp" code="lambda" />. This allows{" "}
            <InlineCode meta="lisp" code="lambda" /> to handle any list of
            parameters.
          </p>

          <p>
            <em>
              ((lambda (p<sub>1</sub>...p<sub>n</sub>) e) a<sub>1</sub>...a
              <sub>n</sub>)
            </em>{" "}
            is the formal definition.
          </p>

          <p>
            <InlineCode meta="lisp" code="label" /> allows functions to be
            called by name, which is arguably the most important feature of any
            programming language.
          </p>

          <p>
            Here, McCarthy defines <InlineCode meta="lisp" code="ff" /> as a
            function to return the first atom in a list. It makes use of labeled
            recursion.
          </p>

          <BlockCode
            code={`(_eval '((label ff (lambda (x)
                     (cond ((atom x) x)
                           ((quote t) (ff (car x))))))
         y)
       '((y ((a b) c))))
; returns a`}
            meta="lisp"
          />

          <p>
            When <InlineCode meta="lisp" code="_eval" /> finds{" "}
            <InlineCode meta="lisp" code="label" />, it will store that function
            in <InlineCode meta="lisp" code="a" /> to be used later. It will
            also begin evaluating the <InlineCode meta="lisp" code="lambda" />{" "}
            function defined by <InlineCode meta="lisp" code="label" />. During
            evaluation, the above expression becomes:
          </p>

          <BlockCode
            code={`(_eval '((lambda (x)
           (cond ((atom x) x)
                 ((quote t) (ff (car x)))))
         y)
       '((ff (label ff (lambda (x)
               (cond ((atom x) x)
                     ((quote t) (ff (car x)))))))
         (y ((a b) c))))
; returns a`}
            meta="lisp"
          />

          <p>
            The full evaluation is, as McCarthy puts it, "an activity better
            suited to electronic computers than to people." I agree and won't be
            listing out every step of evaluation.
          </p>

          <H3>
            Simplifying <span className="font-mono">_eval</span>
          </H3>

          <p>
            Using <InlineCode meta="lisp" code="_eval" /> in its raw form is
            rather verbose, so McCarthy defined{" "}
            <InlineCode meta="lisp" code="_apply" /> as a wrapper to{" "}
            <InlineCode meta="lisp" code="_eval" /> that helps keep expressions
            shorter and easier to understand.
          </p>

          <p>
            This will take the parameters for{" "}
            <InlineCode meta="lisp" code="_eval" /> and wrap them like{" "}
            <InlineCode meta="lisp" code="(quote (param))" />. It also applies
            arguments directly to the function.
          </p>

          <BlockCode
            code={`(def _appq (m)
  (if (_null m) nil (cons (_list 'quote (car m))
                          (_appq (cdr m)))))

(def _apply (f args)
  (_eval (cons f (_appq args)) nil))`}
            meta="lisp"
          />

          <p>
            Using this function, the <InlineCode meta="lisp" code="ff" />{" "}
            function can be written as
          </p>

          <BlockCode
            code={`(_apply '(label ff (lambda (x)
                     (cond ((atom x) x)
                           ((quote t) (ff (car x))))))
        '(a b))`}
            meta="lisp"
          />

          <p>
            which calls <InlineCode meta="lisp" code="_eval" /> as
          </p>

          <BlockCode
            code={`(_eval '((label ff (lambda (x)
                     (cond ((atom x) x)
                           ((quote t) (ff (car x))))))
          (quote a) (quote b))
       'nil)`}
            meta="lisp"
          />

          <p>
            <InlineCode meta="lisp" code="_apply" /> can be used for anything
            you would write using <InlineCode meta="lisp" code="_eval" />. But
            it is useful to first understand{" "}
            <InlineCode meta="lisp" code="_eval" /> before adding this layer of
            abstraction.
          </p>

          <H2>Takeaways</H2>

          <p>
            The ability to define new languages, and monitor their internal
            state makes LISP an excellent language for exploration and
            experimentation.
          </p>

          <p>
            Gone is the magic of compilation and executables. You can see every
            step of evaluation for yourself. That makes the exercise of
            stumbling through the archaic syntax fulfilling.
          </p>

          <p>
            I don't see myself using LISP in production. However, I will
            continue to use it as a tool for broadening my understanding of
            low-level programming.
          </p>

          <p>
            The next step for me is to understand how to implement a compiler
            that would convert this to machine code. I plan to read{" "}
            <InlineLink href="https://web.mit.edu/6.001/6.037/sicp.pdf">
              Structure and Interpretation of Computer Programs
            </InlineLink>{" "}
            to do so.
          </p>

          <p>
            Additionally, I would like to modernize this interpreter. As Paul
            Graham wrote, "The language he [John McCarthy] wrote in 1960 was
            missing a lot. It has no side-effects, no sequential execution, no
            practical numbers, and dynamic scope." But this can be addressed.
          </p>

          <p>
            Paul Graham hints at Steele and Sussman's article,{" "}
            <InlineLink href="https://wiki.c2.com/?TheArtOfTheInterpreter">
              The Art of the Interpreter
            </InlineLink>{" "}
            without getting into specifics. Perhaps I'll go through these in
            another article.
          </p>

          <p>
            Digging through the history of programming, you'll find LISP's
            influence everywhere. The exercise of adjusting to its syntax is a
            worthy pursuit in itself, but developing that true sense of
            understanding opens a window into the inner workings of all
            languages. That is the purpose of understanding LISP.
          </p>

          <Footnotes />
        </div>
      </LoadWrapper>
    </FootnotesProvider>
  );
}
