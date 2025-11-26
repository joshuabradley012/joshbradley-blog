import React, { useMemo } from "react";
import KaTeX from "katex";
import { cn } from "@/lib/utils";
import "katex/dist/katex.min.css";

const createMathComponent = (
  Component: React.ComponentType<{ html: string }>,
  { displayMode }: { displayMode: boolean },
) => {
  const MathComponent = ({
    errorColor,
    math,
    renderError = (error: Error) => (
      <span className="text-red-500">{error.message}</span>
    ),
  }: {
    errorColor?: string;
    math?: string;
    renderError?: (error: Error) => React.ReactNode;
  }) => {
    const formula = math;

    const { html, error } = useMemo(() => {
      try {
        if (!formula) {
          return { html: "", error: undefined };
        }

        const html = KaTeX.renderToString(formula, {
          displayMode,
          errorColor,
          throwOnError: !!renderError,
        });

        return { html, error: undefined };
      } catch (error) {
        if (error instanceof KaTeX.ParseError || error instanceof TypeError) {
          return { error };
        }

        throw error;
      }
    }, [formula, errorColor, renderError]);

    if (error) {
      return renderError ? (
        renderError(error)
      ) : (
        <Component html={`${error.message}`} />
      );
    }

    return <Component html={html} />;
  };

  return MathComponent;
};

const InternalBlockMath = ({
  html,
  className,
}: {
  html: string;
  className?: string;
}) => {
  return (
    <div
      className={cn("my-8 text-base text-neutral-900", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

const InternalInlineMath = ({
  html,
  className,
}: {
  html: string;
  className?: string;
}) => {
  return (
    <span
      className={cn("text-neutral-900", className)}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

export const BlockMath = createMathComponent(InternalBlockMath, {
  displayMode: true,
});
export const InlineMath = createMathComponent(InternalInlineMath, {
  displayMode: false,
});
