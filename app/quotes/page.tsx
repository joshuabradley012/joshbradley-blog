import type { Metadata } from "next";
import BlockQuote from "@/components/ui/BlockQuote";

export const metadata: Metadata = {
  title: "Quotes",
  description: "A collection of my favorite quotes, gathered over time.",
};

export default function Quotes() {
  return (
    <div className="space-y-4">
      <BlockQuote
        className="mt-0"
        author="John Steinbeck"
        source="East of Eden"
      >
        <p>
          And this I believe: that the free, exploring mind of the individual
          human is the most valuable thing in the world. And this I would fight
          for: the freedom of the mind to take any direction it wishes,
          undirected. And this I must fight against: any idea, religion, or
          government which limits or destroys the individual. This is what I am
          and what I am about.
        </p>
      </BlockQuote>
      <BlockQuote source="Serbian proverb">
        <p>
          Be humble for you are made of earth. Be noble for you are made of
          stars.
        </p>
      </BlockQuote>
      <BlockQuote author="John Adams">
        <p>
          I must study politics and war, that our sons may have liberty to study
          mathematics and philosophy. Our sons ought to study mathematics and
          philosophy, geography, natural history and naval architecture,
          navigation, commerce and agriculture in order to give their children a
          right to study painting, poetry, music, architecture, statuary,
          tapestry and porcelain.
        </p>
      </BlockQuote>
      <BlockQuote author="Nick Cave">
        <p>
          Conservatism is an aspiration, it is something we should strive for—a
          society that works well enough that it is worth conserving.
        </p>
      </BlockQuote>
      <BlockQuote author="Stephen Jay Gould">
        <p>
          I am, somehow, less interested in the weight and convolutions of
          Einstein's brain than in the near certainty that people of equal
          talent have lived and died in cotton fields and sweatshops.
        </p>
      </BlockQuote>
      <BlockQuote author="Norman Borlaug">
        <p>
          Some of the environmental lobbyists of the Western nations are the
          salt of the earth, but many of them are elitists. They've never
          experienced the physical sensation of hunger. They do their lobbying
          from comfortable office suites in Washington or Brussels. If they
          lived just one month amid the misery of the developing world, as I
          have for fifty years, they'd be crying out for tractors and fertilizer
          and irrigation canals and be outraged that fashionable elitists back
          home were trying to deny them these things.
        </p>
      </BlockQuote>
      <BlockQuote author="C.S Lewis" source="Learning in Wartime">
        <p>
          Human life has always been lived on the edge of a precipice. Human
          culture has always had to exist under the shadow of something
          infinitely more important than itself. If men had postponed the search
          for knowledge and beauty until they were secure, the search would have
          never begun. We are mistaken when we compare war with "normal life".
          Life has never been normal. Even those period which we think most
          tranquil, like the nineteenth century, turn out, on closer inspection,
          to be full of crises, alarms, difficulties, emergencies. Plausible
          reasons have never been lacking for putting off all merely cultural
          activities until some imminent danger has been averted or some crying
          injustice put right. But humanity long ago chose to neglect those
          plausible reasons. They wanted knowledge and beauty now, and would not
          wait for the suitable moment that never comes. Periclean Athens leaves
          us not only the Pantheon, but significantly, the Funeral Oration. The
          insects have chosen a different line: they have sought for the
          material welfare and security of the hive, and presumably they have
          their reward. Men are different. They propound mathematical theorems
          in beleaguered cities, conduct metaphysical arguments in condemned
          cells, make jokes on scaffolds, discuss the last new poem while
          advancing to the walls of Quebec, and comb their hair at Thermopylae.
          This is not <strong>panache:</strong> it is out nature.
        </p>
      </BlockQuote>
      <BlockQuote author="Walt Whitman" source="Song of Myself, 51">
        <pre className="overflow-x-auto font-serif">
          {`Do I contradict myself?
Very well then I contradict myself,
(I am large, I contain multitudes.)`}
        </pre>
      </BlockQuote>
      <BlockQuote author="Shunryū Suzuki" source="Zen Mind, Beginner's Mind">
        <p>
          The position expresses the oneness of duality: not two and not one.
          This is the most important teaching: not two and not one. Our body and
          mind are not two and not one. If you think your body and mind are two,
          that is wrong; if you think that they are one, that is also wrong. Our
          body and mind are both two and one. We usually think that if something
          is not one, it is more than one; if it is not singular, it is plural.
          But in actual experience, our life is not only plural, but also
          singular.
        </p>
      </BlockQuote>
      <BlockQuote
        author="Kevin Kelley"
        source="God, the Superposition"
        href="https://kk.org/thetechnium/god-the-superposition/"
      >
        <p className="text-left">
          This superposition of beginning/no-beginning, nothing/something,
          freewill/determinism, God/not-God is the essence of all being; it is
          paradox itself that generates the unlikely arrangements of all that we
          consider real and good.
        </p>
      </BlockQuote>
      <BlockQuote author="Helen Keller" source="Before the Soul Dawn">
        <p>
          Before my teacher came to me, I did not know that I am. ... My inner
          life, then, was a blank without past, present, or future, without hope
          or anticipation, without wonder or joy or faith. ... When I learned
          the meaning of "I" and "me" and found that I was something, I began to
          think. ... Thought made me conscious of love, joy, and all the
          emotions.
        </p>
      </BlockQuote>
      <BlockQuote author="Timothy Leary">
        <p>
          Admit it. You aren't like them. You're not even close. You may
          occasionally dress yourself up as one of them, watch the same mindless
          television shows as they do, maybe even eat the same fast food
          sometimes. But it seems that the more you try to fit in, the more you
          feel like an outsider, watching the “normal people” as they go about
          their automatic existences. For every time you say club passwords like
          “Have a nice day” and “Weather's awful today, eh?”, you yearn inside
          to say forbidden things like “Tell me something that makes you cry” or
          “What do you think deja vu is for?”. Face it, you even want to talk to
          that girl in the elevator. But what if that girl in the elevator (and
          the balding man who walks past your cubicle at work) are thinking the
          same thing? Who knows what you might learn from taking a chance on
          conversation with a stranger? Everyone carries a piece of the puzzle.
          Nobody comes into your life by mere coincidence. Trust your instincts.
          Do the unexpected. Find the others…
        </p>
      </BlockQuote>
      <BlockQuote author="Julien Smith" source="The Flinch">
        <p>
          If it is useful to do so, you must abandon your identity and start
          again. Sometimes, it's the only way. Set fire to your old self. It's
          not needed here. It's too busy shopping, gossiping about others, and
          watching days go by and asking why you haven't gotten as far as you'd
          like. This old self will die and be forgotten by all but family, and
          replaced by someone who makes a difference.
        </p>
        <p>
          Your new self is not like that. Your new self is the Great Chicago
          Fire—overwhelming, overpowering, and destroying everything that isn't
          necessary.
        </p>
      </BlockQuote>
      <BlockQuote author="Bret Weinstein">
        <p>
          The population is made up of four types of people: A small number hunt
          witches. A large number go along with the hunt. A larger number are
          silent. A tiny number oppose it. The final group—as if by magic—become
          witches.
        </p>
      </BlockQuote>
      <BlockQuote author="John Steinbeck" source="East of Eden">
        <p>
          And then—the glory—so that a cricket song sweetens his ears, the smell
          of the earth rises, chanting to his nose, and dappling light under a
          tree blesses his eyes. Then a man pours outward, a torrent of him, and
          yet he is not diminished. ... It is the mother of all creativeness,
          and it sets each man separate from all other men.
        </p>
      </BlockQuote>
      <BlockQuote author="Kahlil Gibran" source="The Prophet">
        <p>
          THEN a woman said, Speak to us of Joy and Sorrow. And he answered:
          Your joy is your sorrow unmasked. And the selfsame well from which
          your laughter rises was oftentimes filled with your tears. And how
          else can it be? The deeper that sorrow carves into your being, the
          more joy you can contain. Is not the cup that holds your wine the very
          cup that was burned in the potter's oven? And is not the lute that
          soothes your spirit, the very wood that was hollowed with knives? When
          you are joyous, look deep into your heart and you shall find it is
          only that which has given you sorrow that is giving you joy. When you
          are sorrowful look again in your heart, and you shall see that in
          truth you are weeping for that which has been your delight.
        </p>
        <p>
          Some of you say, "Joy is greater than sorrow," and others say, "Nay,
          sorrow is the greater." But I say unto you, they are inseparable.
          Together they come, and when one sits alone with you at your board,
          remember that the other is asleep upon your bed.
        </p>
        <p>
          Verily you are suspended like scales between your sorrow and your joy.
          Only when you are empty are you at standstill and balanced. When the
          treasure-keeper lifts you to weigh his gold and his silver, needs must
          your joy or your sorrow rise or fall.
        </p>
      </BlockQuote>
      <BlockQuote author="William Shakespeare" source="Hamlet">
        <pre className="overflow-x-auto font-serif">
          {`To be, or not to be, that is the question:
Whether 'tis nobler in the mind to suffer
The slings and arrows of outrageous fortune,
Or to take arms against a sea of troubles
And by opposing end them. To die—to sleep,
No more; and by a sleep to say we end
The heart-ache and the thousand natural shocks
That flesh is heir to: 'tis a consummation
Devoutly to be wish'd. To die, to sleep;
To sleep, perchance to dream—ay, there's the rub:
For in that sleep of death what dreams may come,
When we have shuffled off this mortal coil,
Must give us pause.`}
        </pre>
      </BlockQuote>
      <BlockQuote author="F. Scott Fitzgerald" source="The Great Gatsby">
        <p>
          So we beat on, boats against the current, borne back ceaselessly into
          the past.
        </p>
      </BlockQuote>
      <BlockQuote author="Antoine de Saint-Exupéry">
        <p>
          If you want to build a ship, don't drum up the men to gather wood,
          divide the work, and give orders. Instead, teach them to yearn for the
          vast and endless sea.
        </p>
      </BlockQuote>
      <BlockQuote author="C.S Lewis" source="The Four Loves">
        <p>
          There is no safe investment. To love at all is to be vulnerable. Love
          anything, and your heart will certainly be wrung and possibly be
          broken. If you want to make sure of keeping it intact, you must give
          your heart to no one, not even to an animal. Wrap it carefully round
          with hobbies and little luxuries; avoid all entanglements; lock it up
          safe in the casket of coffin of your selfishness. But in that
          casket-safe, dark, motionless, air-less, it will change. It will not
          be broken; it will become unbreakable, impenetrable, irredeemable. The
          alternative to tragedy, or at least to the risk of tragedy, is
          damnation. The only place outside Heaven where you can be perfectly
          safe from all the dangers and perturbations of love is Hell.
        </p>
      </BlockQuote>
      <BlockQuote author="Paulo Coelho" source="The Alchemist">
        <p>
          When you want something, all the universe conspires in helping you to
          achieve it.
        </p>
      </BlockQuote>
      <BlockQuote author="Dylan Thomas" className="mb-0">
        <pre className="overflow-x-auto font-serif">
          {`Do not go gentle into that good night,
Old age should burn and rave at close of day;
Rage, rage against the dying of the light.

Though wise men at their end know dark is right,
Because their words had forked no lightning they
Do not go gentle into that good night.

Good men, the last wave by, crying how bright
Their frail deeds might have danced in a green bay,
Rage, rage against the dying of the light.

Wild men who caught and sang the sun in flight,
And learn, too late, they grieved it on its way,
Do not go gentle into that good night.

Grave men, near death, who see with blinding sight
Blind eyes could blaze like meteors and be gay,
Rage, rage against the dying of the light.

And you, my father, there on the sad height,
Curse, bless, me now with your fierce tears, I pray.
Do not go gentle into that good night.
Rage, rage against the dying of the light.`}
        </pre>
      </BlockQuote>
    </div>
  );
}
