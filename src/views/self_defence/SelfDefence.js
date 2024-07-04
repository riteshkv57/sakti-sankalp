import React from "react";
import { Container } from "react-bootstrap";
import SelfDefenceInfo from "./SelfDefenceInfo";
import Route from "../../Routing/Route";

const moves = {
  hammerStrike: {
    title: "Hammer Strike",
    subTitle:
      "Using your car keys is one of the easiest ways to defend yourself. Don’t use your fingernails, because you’re more at risk to injure your hands. Instead, if you feel unsafe while walking at night, have your keys stick out from one side of your fist for hammer strikes.",
    linkToVideo: "https://thumbs.gfycat.com/FluffyFlashyCockroach-mobile.mp4",
    list: [
      "Hold your key ring in a tight fist, like holding a hammer, with keys extending from the side of your hand.",
      "Thrust downward toward your target.",
    ],
  },
  groinKick: {
    title: "Groin kick",
    subTitle:
      "If someone is coming at you from the front, a groin kick may deliver enough force to paralyze your attacker, making your escape possible.",
    linkToVideo:
      "https://thumbs.gfycat.com/MetallicBoilingGermanshorthairedpointer-mobile.mp4",
    list: [
      "Stabilize yourself as best you can.",
      "Lift your dominant leg off the ground and begin to drive your knee upward.",
      "Extend your dominant leg, drive hips forward, slightly lean back, and kick forcefully, making contact between your lower shin or ball of your foot and the attacker’s groin area.",
    ],
  },

  heelPalmStrike: {
    title: "Heel palm strike",
    subTitle:
      "This move can cause damage to the nose or throat. To execute, get in front of your attacker as much as is possible.",
    linkToVideo:
      "https://thumbs.gfycat.com/InnocentImpassionedBrocketdeer-mobile.mp4",
    list: [
      "With your dominant hand, flex your wrist.",
      "Aim for either the attacker’s nose, jabbing upward from the nostrils, or underneath the attacker’s chin, jabbing upward at the throat.",
      "Make sure to recoil your strike. Pulling your arm back quickly will help thrust the attacker’s head up and back.",
      "This will cause your attacker to stagger backward, allowing you to escape their grasp.",
    ],
  },
  escapeWithHandsTrapped: {
    title: "Escape with hands trapped",
    subTitle:
      "If your attacker comes from behind and traps your arms (this is similar to a bear hug, but you won’t be able to move as freely)",
    linkToVideo:
      "https://thumbs.gfycat.com/SarcasticSilverDouglasfirbarkbeetle-mobile.mp4",
    list: [
      "First reaction should be to stop your attacker’s arms from going higher into a headlock. Shift your hips to one side. This gives an opening for strikes to the groin with open-handed slaps.",
      "Bring your hand back up to your arms and raise your opposite elbow to turn into the wrap. Keep your arms tight to your chest as you’re turning in.",
      "Stay aggressive with your knees and other counterattacks until you can disengage.",
    ],
  },
  escapeFromSideHeadlock: {
    title: "Escape from side headlock",
    subTitle:
      "When the attacker locks their arm around your head from the side, your first instinct should be to avoid getting choked.",
    linkToVideo:
      "https://thumbs.gfycat.com/NegativePlaintiveCatfish-mobile.mp4",
    list: [
      "Turn into the attacker’s side as much as possible to avoid being choked.",
      "With your hand that’s furthest away, strike the groin with open-handed slaps until you have enough mobility to turn your head all the way out to disengage.",
    ],
  },
  elbowStrike: {
    title: "Elbow strike",
    subTitle:
      "If your attacker is in close range and you’re unable to get enough momentum to throw a strong punch or kick, use your elbows.",
    linkToVideo:
      "https://thumbs.gfycat.com/FrenchFatGalapagosmockingbird-mobile.mp4",
    list: [
      "If you can, stabilize yourself with a strong core and legs to ensure a powerful blow.",
      "Bend your arm at the elbow, shift your weight forward, and strike your elbow into your attacker’s neck, jawline, chin, or temple. These are all effective targets.",
      "This may cause your attacker to loosen their grip, allowing you to run.",
    ],
  },
  alternativeElbowStrikes: {
    title: "Alternative elbow strikes",
    subTitle:
      "Depending on how you’re standing when you’re initially attacked, you may be in a better position for variations on the elbow strike.",
    linkToVideo:
      "https://thumbs.gfycat.com/DecimalWeightyGrayreefshark-mobile.mp4",
    list: [
      "Lift your elbow to shoulder height.",
      "Pivot on same-side foot and allow your hips to rotate, creating more momentum into the front part of your elbow when you strike.",
    ],
  },
  escapeFromABearHugAttack: {
    title: "Escape from a ‘bear hug attack’",
    subTitle:
      "For cases where the attacker is coming from behind, you’ll want to use this move. Focus on getting low and creating space to free yourself.",
    linkToVideo:
      "https://thumbs.gfycat.com/AmusingGargantuanAnaconda-mobile.mp4",
    list: [
      "Bend forward from the waist. This shifts your weight forward, making it more difficult for your attacker to pick you up. It also gives you a better angle to throw elbows from side to side to the attacker’s face.",
      "Turn into the attacker with one of your elbows and continue counterattacking.",
      "This should give you space to turn fully, using another move to injure the face or strike the groin. With the space these moves have created, you may be able to escape and run away.",
    ],
  },
};

const SelfDefence = (props) => {
  return (
    <Route path="/selfdefence">
      <div>
        <Container>
          <h2 className="my-4 text-center">Self Defence for Women</h2>
          <hr />
          <SelfDefenceInfo
            title={moves["elbowStrike"].title}
            subTitle={moves["elbowStrike"].subTitle}
            linkToVideo={moves["elbowStrike"].linkToVideo}
            steps={moves["elbowStrike"].list}
          />
          <SelfDefenceInfo
            title={moves["alternativeElbowStrikes"].title}
            subTitle={moves["alternativeElbowStrikes"].subTitle}
            linkToVideo={moves["alternativeElbowStrikes"].linkToVideo}
            steps={moves["alternativeElbowStrikes"].list}
            reverse="flex-row-reverse"
          />

          <SelfDefenceInfo
            title={moves["escapeFromABearHugAttack"].title}
            subTitle={moves["escapeFromABearHugAttack"].subTitle}
            linkToVideo={moves["escapeFromABearHugAttack"].linkToVideo}
            steps={moves["escapeFromABearHugAttack"].list}
          />

          <SelfDefenceInfo
            title={moves["hammerStrike"].title}
            subTitle={moves["hammerStrike"].subTitle}
            linkToVideo={moves["hammerStrike"].linkToVideo}
            steps={moves["hammerStrike"].list}
            reverse="flex-row-reverse"
          />

          <SelfDefenceInfo
            title={moves["groinKick"].title}
            subTitle={moves["groinKick"].subTitle}
            linkToVideo={moves["groinKick"].linkToVideo}
            steps={moves["groinKick"].list}
          />

          <SelfDefenceInfo
            title={moves["escapeFromSideHeadlock"].title}
            subTitle={moves["escapeFromSideHeadlock"].subTitle}
            linkToVideo={moves["escapeFromSideHeadlock"].linkToVideo}
            steps={moves["escapeFromSideHeadlock"].list}
            reverse="flex-row-reverse"
          />

          <SelfDefenceInfo
            title={moves["heelPalmStrike"].title}
            subTitle={moves["heelPalmStrike"].subTitle}
            linkToVideo={moves["heelPalmStrike"].linkToVideo}
            steps={moves["heelPalmStrike"].list}
          />

          <SelfDefenceInfo
            title={moves["escapeWithHandsTrapped"].title}
            subTitle={moves["escapeWithHandsTrapped"].subTitle}
            linkToVideo={moves["escapeWithHandsTrapped"].linkToVideo}
            steps={moves["escapeWithHandsTrapped"].list}
            reverse="flex-row-reverse"
          />
        </Container>
      </div>
    </Route>
  );
};

export default SelfDefence;
