import type { Metadata } from "next";
import { H1 } from "@/components/Headings";
import { Ul, Li } from "@/components/List";
import InlineLink from "@/components/InlineLink";

export const metadata: Metadata = {
  title: "Principles",
  description: "The principles which I live my life by.",
};

export default function Principles() {
  return (
    <div className="space-y-4">
      <H1>Principles</H1>
      <p>
        Inspired by{" "}
        <InlineLink href="https://www.principles.com/">Ray Dalio</InlineLink>,{" "}
        <InlineLink href="https://www.stripe.press/poor-charlies-almanack">
          Charlie Munger
        </InlineLink>
        , and <InlineLink href="https://nav.al/">Naval Ravikant</InlineLink>, I
        am recording the principles which guide me through my decision making.
      </p>
      <Ul>
        <Li>Occam's Razor</Li>
        <Li>Hanlon's Razor</Li>
        <Li>Antifragility</Li>
        <Li>Metcalfe's Law</Li>
        <Li>Moore's Law</Li>
        <Li>Jevon's Paradox</Li>
        <Li>Pareto Principle</Li>
        <Li>Exponentiality</Li>
        <Li>Combinatorics</Li>
        <Li>Statistics</Li>
        <Li>Rising Complexity</Li>
        <Li>Emergence</Li>
        <Li>Malthusian trap</Li>
        <Li>Simplicity</Li>
        <Li>Brevity</Li>
        <Li>Power</Li>
        <Li>Zero to One</Li>
        <Li>Waves Interference</Li>
        <Li>Free Markets</Li>
        <Li>Supply and Demand</Li>
        <Li>Safety and Trust</Li>
        <Li>Rational and Intuitive Thinking</Li>
        <Li>Antirational</Li>
        <Li>Deception</Li>
        <Li>Computation</Li>
        <Li>Multidimensional</Li>
        <Li>Intelligence</Li>
        <Li>Conscious vs Unconscious</Li>
        <Li>Long Tail Events</Li>
        <Li>Agency</Li>
        <Li>Globalization</Li>
        <Li>Abundance</Li>
        <Li>Radical Transparency</Li>
        <Li>Freedom</Li>
        <Li>Paradoxes</Li>
        <Li>Falsifiability</Li>
        <Li>Relativity</Li>
        <Li>Believability</Li>
        <Li>Entropy</Li>
        <Li>Structure</Li>
        <Li>Depth</Li>
        <Li>Truth</Li>
        <Li>Conformity vs Independence</Li>
        <Li>Creativity</Li>
        <Li>Knowledge</Li>
        <Li>Integration</Li>
        <Li>Health</Li>
        <Li>Scalability</Li>
        <Li>Composition</Li>
        <Li>Efficiency</Li>
        <Li>Debt</Li>
        <Li>Reserve Currency</Li>
        <Li>Scarcity</Li>
        <Li>Irreducible Complexity</Li>
        <Li>Happiness</Li>
        <Li>Strong Opinions</Li>
        <Li>Supremacy</Li>
        <Li>Inflation</Li>
        <Li>Wealth</Li>
        <Li>God</Li>
        <Li>Focus</Li>
        <Li>Computation</Li>
        <Li>Stillness</Li>
        <Li>Culture and Values</Li>
        <Li>Compound Interest</Li>
        <Li>Consistency</Li>
        <Li>Technology</Li>
        <Li>Progress</Li>
        <Li>Evolution</Li>
        <Li>Leverage</Li>
        <Li>Presence</Li>
        <Li>Duality</Li>
        <Li>Non-Duality</Li>
        <Li>Numeracy</Li>
        <Li>Literacy</Li>
        <Li>Durability</Li>
        <Li>Democracy</Li>
        <Li>Stability</Li>
        <Li>Surrender</Li>
        <Li>Grit</Li>
        <Li>Growth</Li>
        <Li>Honesty</Li>
        <Li>Systems</Li>
        <Li>Leadership</Li>
        <Li>Reality/Grounded</Li>
        <Li>Communication</Li>
        <Li>Open-Minded</Li>
        <Li>Status Games</Li>
        <Li>Accountability</Li>
        <Li>Responsibility</Li>
        <Li>Suffering</Li>
        <Li>Stoicism</Li>
        <Li>Wisdom</Li>
        <Li>Time and Space</Li>
        <Li>Reciprocity</Li>
        <Li>Pascal's Wager</Li>
        <Li>Enlightenment</Li>
        <Li>Superposition</Li>
        <Li>Quantum Observer Effect</Li>
        <Li>Incentive and Outcomes</Li>
        <Li>Balance</Li>
        <Li>Optimism</Li>
        <Li>Decentralization</Li>
        <Li>Signal vs Noise</Li>
        <Li>Language and Storytelling</Li>
        <Li>Limits</Li>
        <Li>Effectiveness</Li>
        <Li>Reputation</Li>
        <Li>Logic</Li>
        <Li>Virality</Li>
        <Li>Death</Li>
        <Li>Imerpmanence</Li>
        <Li>Unconditional Love</Li>
      </Ul>
    </div>
  );
}
