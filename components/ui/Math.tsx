"use client";

import React, { useMemo } from "react";
import KaTeX from "katex";

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

const InternalBlockMath = ({ html }: { html: string }) => {
  return (
    <div data-testid="react-katex" dangerouslySetInnerHTML={{ __html: html }} />
  );
};

const InternalInlineMath = ({ html }: { html: string }) => {
  return (
    <span
      data-testid="react-katex"
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
