import React, { useMemo } from "react";
import KaTeX from "katex";
import { cn } from "@/lib/utils";
const createMathComponent = (
  Component: React.ComponentType<{ html: string }>,
  { displayMode }: { displayMode: boolean },
) => {
  const MathComponent = ({
    children,
    errorColor,
    math,
    renderError = (error: Error) => (
      <span className="text-red-500">{error.message}</span>
    ),
  }: {
    children?: string;
    errorColor?: string;
    math?: string;
    renderError?: (error: Error) => React.ReactNode;
  }) => {
    const formula = math ?? children;

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

    console.log({ html, error });

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
      className={cn(
        "my-8 border border-neutral-200 py-8 text-base text-black",
        className,
      )}
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
      className={cn("text-black", className)}
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
