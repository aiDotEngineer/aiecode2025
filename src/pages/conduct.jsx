// @ts-nocheck
import { Container } from '~/components/Container';
import { FadeIn } from '~/components/FadeIn';
import { PageIntro } from '~/components/PageIntro';

function AntiHarassment() {
  return (
    <FadeIn>
      <h2 className="mt-10 text-2xl font-semibold">{`Anti-Harassment Policy`}</h2>

      <p className="mt-8">
        {`World's Fair is dedicated to providing a harassment-free conference
          experience for everyone, regardless of gender, gender identity and
          expression, age, sexual orientation, disability, physical appearance,
          body size, race, ethnicity, religion (or lack thereof), or technology
          choices. We do not tolerate harassment of conference participants in
          any form. Sexual language and imagery is not appropriate for any
          conference venue, including talks, workshops, parties, Twitter and
          other online media. Conference participants violating these rules may
          be sanctioned or expelled from the conference without a refund at the
          discretion of the conference organizers.`}
      </p>

      <p className="mt-8">
        {`Sponsors should not use sexualized images, activities, or other
          material. Booth staff (including volunteers) should not use sexualized
          clothing/uniforms/costumes, or otherwise create a sexualized
          environment.`}
      </p>

      <p className="mt-8">{`Harassment includes, but is not limited to:`}</p>

      <ul className="mt-8 list-disc pl-6">
        <li className="mb-3">
          {`Verbal or written offensive comments related to gender, gender
            identity and expression, sexual orientation, disability, physical
            appearance, body size, race, age, or religion`}
        </li>
        <li className="mb-3">{`Sexual images in public spaces`}</li>
        <li className="mb-3">
          {`Deliberate intimidation, stalking, or following`}
        </li>
        <li className="mb-3">{`Harassing photography or recording`}</li>
        <li className="mb-3">
          {`Sustained disruption of talks or other events`}
        </li>
        <li className="mb-3">{`Inappropriate physical contact`}</li>
        <li className="mb-3">{`Unwelcome sexual attention`}</li>
        <li>{`Advocating for, or encouraging, any of the above behavior`}</li>
      </ul>
    </FadeIn>
  );
}

function BathroomPolicy() {
  return (
    <FadeIn>
      <h2 className="mt-10 text-2xl font-semibold">{`Bathroom Policy`}</h2>

      <p className="mt-8">
        {`Diversity and self-expression are important in our world - both at
  World's Fair and beyond.`}
      </p>

      <p className="mt-8">
        {`Therefore, we encourage all attendees at the conference to use the
  bathroom they feel most comfortable in, regardless of gender
  expression. Should you feel inclined to question someone's bathroom
  choice, please don't - we feel sure they know quite well where they
  belong.`}
      </p>

      <p className="mt-8">
        {`If you witness someone being made to feel unwelcome, or someone
  makes you feel unwelcome while using the facilities, please reach
  out to a conference staff member so we can assist you.`}
      </p>
    </FadeIn>
  );
}

function Reporting() {
  return (
    <FadeIn>
      <h2 className="mt-10 text-2xl font-semibold">{`Reporting`}</h2>

      <p className="mt-8">
        {`If you experience or witness unacceptable behavior—or have any other
  concerns—please report it by contacting us at hello@ai.engineer,
  or by approaching a member of staff at the event to assist with
  submitting a written report. Conference members can be identified by
  a clearly-marked “STAFF” t-shirt.`}
      </p>

      <p className="mt-8">
        {`All reports will be handled with discretion. In your report please
  include:`}
      </p>

      <ul className="mt-8 list-disc pl-6">
        <li className="mb-3">Your contact information</li>
        <li className="mb-3">
          {`Names (real, nicknames, or pseudonyms) of any individuals involved`}
        </li>
        <li className="mb-3">
          {`If there are additional witnesses, please include them as well`}
        </li>
        <li className="mb-3">
          {`Your account of what occurred, and if you believe the incident is
    ongoing`}
        </li>
        <li className="mb-3">
          {`If there is a publicly available record (e.g. text messages,
    emails, slack messages), please include a link`}
        </li>
        <li>{`Any additional information that may be helpful`}</li>
      </ul>

      <p className="mt-8">
        {`After filing a report, a representative will contact you personally,
        review the incident, follow up with any additional questions, and make a
        decision as to how to respond. If the person who is harassing you is
        part of the response team, they will recuse themselves from handling
        your incident. If the complaint originates from a member of the response
        team, it will be handled by a different member of the response team. We
        will respect confidentiality requests for the purpose of protecting
        victims of abuse.`}
      </p>

      <p className="mt-8">
        {`Anonymous reports can be made `}
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSeJdbasNxFw02eBPIVQ0yb5T5Q6zzs78pJ-3y098jJ9Y-ZyEg/viewform?usp=sf_link"
          target="_blank"
          aria-label="Anonymous reports"
          className="underline transition hover:text-neutral-700"
        >
          {`here`}
        </a>
        {`.`}
      </p>

      <p className="mt-8">
        {`We can't follow up an anonymous report with you directly, but we will
        fully investigate it and take whatever action is necessary to prevent a
        recurrence.`}
      </p>
    </FadeIn>
  );
}

function Enforcement() {
  return (
    <FadeIn>
      <h2 className="mt-10 text-2xl font-semibold">{`Enforcement`}</h2>

      <p className="mt-8">
        {`Adherence to and acceptance of this Code of Conduct is a condition of
        entry. Participants asked to stop any harassing behavior are expected to
        comply immediately. This includes all attendees, sponsors, speakers,
        organizers, volunteers, and venue or vendor staff.`}
      </p>
      <p className="mt-8">
        {`If a participant engages in harassing behavior, event organizers retain
        the right to take any actions to keep the event a welcoming environment
        for all participants. This includes but is not limited to warning the
        offender or expulsion from the conference without the possibility for
        refund.`}
      </p>
      <p className="mt-8">
        {`We expect participants to follow these rules at all conference venues
        and conference-related social events.`}
      </p>
    </FadeIn>
  );
}

function AttributionAndAcknowledgements() {
  return (
    <FadeIn>
      <h2 className="mt-10 text-2xl font-semibold">{`Attribution & Acknowledgements`}</h2>

      <p className="mt-8">
        {`We would like to thank the following conferences and communities for
        their inspiration and assistance in drafting our own code of conduct:`}
      </p>

      <ul className="mt-8 list-disc pl-6">
        <li className="mb-3">{`JSConf`}</li>
        <li className="mb-3">{`Django`}</li>
        <li className="mb-3">{`Python`}</li>
        <li className="mb-3">{`Ubuntu`}</li>
        <li className="mb-3">{`Geek Feminism`}</li>
        <li>{`NG Conf`}</li>
      </ul>
    </FadeIn>
  );
}

export default function Conduct() {
  return (
    <div className="pt-16">
      <PageIntro title="Code of Conduct.">
        <p>
          {`The comfort and safety of our attendees, speakers, and sponsors is our
          top priority. Please take the time to read our code of conduct to
          ensure that you are aware of our policies, and that you know your
          options for reporting violations.`}
        </p>
      </PageIntro>

      <Container className="mt-8 sm:mt-10 lg:mt-12">
        <FadeIn>
          <p>
            {`World's Fair is not just a conference it's a community! We strive to
            create an inclusive, judgement- and harassment-free place for
            individuals of all backgrounds and levels of experience to learn,
            connect, and grow together.`}
          </p>
          <p className="mt-8">
            {`Every person has their personal story
            that has shaped their unique perspective. This can be a fascinating
            thing! Everyone you meet has the potential to amaze you with the
            things they've done and the things they know. However, it can also
            create misunderstandings, which can potentially lead to conflict.`}
          </p>
          <p className="mt-8">
            {`In order to mitigate conflict, and to create a more welcoming, safe
            atmosphere, all conference attendees, sponsors, speakers, vendors,
            volunteers, staff and organizers shall:`}
          </p>

          <ol className="mt-8 list-decimal pl-6 font-semibold">
            <li className="mb-3">
              {`Be considerate:`}
              <br />
              <span className="font-normal">
                {`Approach your interactions with thoughtfulness and care. Recognize
              the myriad differences between yourself and others, and that you
              may not view the world through the same lens. Do not dismiss
              someone because they have a different level of experience, are of
              a different background, or have a difference of opinion. Be kind
              to others.`}
              </span>
            </li>
            <li className="mb-3">
              {`Be respectful:`}
              <br />
              <span className="font-normal">
                {`Disagreement is not an excuse for poor manners. We work together
              to resolve conflict, assume good intentions, and do our best to
              act in an empathic fashion. We don't allow frustration to turn
              into a personal attack. A community where people feel
              uncomfortable or threatened is not a productive one.`}
              </span>
            </li>
            <li className="mb-3">
              {`Take responsibility for your words and actions:`}
              <br />
              <span className="font-normal">
                {`We all make mistakes. When we do, we take responsibility for them.
              If someone has been harmed or offended, we listen carefully and
              respectfully, and work to right the wrong. We should strive to
              apologize and forgive when possible.`}
              </span>
            </li>
            <li>
              {`Recognize the reasons for disagreement:`}
              <br />
              <span className="font-normal">
                {`If everyone agreed on everything, there would be no progress.
              Differences of opinion are the foundation of progress, both
              socially and technologically. It is important to recognize the
              benefit of such differing perspectives and to remain respectful in
              both the expression of your ideas and the interpretation of
              another's. Such conversations of disagreement should be conducted
              with consideration, in a respectful manner, focusing on a
              collaborative, rather than combative, goal.`}
              </span>
            </li>
          </ol>
        </FadeIn>

        <AntiHarassment />

        <BathroomPolicy />

        <Reporting />

        <Enforcement />

        <AttributionAndAcknowledgements />
      </Container>
    </div>
  );
}
