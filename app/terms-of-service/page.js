export const metadata = {
  title: 'Terms of Service | TeleDirectMD',
  description: 'TeleDirectMD Terms of Service — review our service terms including eligibility, payment, controlled substance policy, dispute resolution, and patient responsibilities for virtual urgent care across 41 states + D.C.',
  alternates: { canonical: 'https://teledirectmd.com/terms-of-service' },
};

export default function TermsOfService() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: tosPageCSS }} />
      <div className="tos-page">
        <h1 className="tos-title">Terms of Service</h1>
        <p className="tos-effective">Effective date: April 16, 2026</p>

        {/* IMPORTANT NOTICES */}
        <div className="tos-notice tos-notice--warning">
          <p className="tos-notice-heading">IMPORTANT NOTICES — PLEASE READ BEFORE USING THIS SITE OR SERVICES:</p>
          <p><strong>ARBITRATION NOTICE:</strong> These Terms contain a mandatory binding arbitration clause and class action waiver (Section 12). By using TeleDirectMD&apos;s services, you agree that disputes will be resolved through individual arbitration, not through jury trial or class action. You have 30 days from first use to opt out. See Section 12 for details.</p>
          <p><strong>CONTROLLED SUBSTANCES:</strong> TeleDirectMD does <strong>not</strong> prescribe controlled substances of any schedule (Schedule II through V), including opioids, benzodiazepines, stimulants, or sleep medications. No exceptions will be made under any circumstances.</p>
          <p style={{ marginBottom: 0 }}><strong>NOT EMERGENCY CARE:</strong> TeleDirectMD is not a substitute for emergency medical services. If you are experiencing a medical emergency, call 911 or go to your nearest emergency room immediately.</p>
        </div>

        <p className="tos-disclaimer">These Terms of Service (&ldquo;Terms&rdquo;) are provided for informational and contractual purposes. TeleDirectMD is not providing legal advice. If you have legal questions about these Terms, please consult your own qualified legal counsel.</p>

        <section className="tos-body">

          {/* 1. ACCEPTANCE */}
          <h2>1. Acceptance of Terms</h2>
          <p>By accessing or using the TeleDirectMD website at <strong>teledirectmd.com</strong> (the &ldquo;Site&rdquo;), scheduling or attending a virtual visit, completing an intake form, or otherwise engaging with any service offered by TeleDirectMD (&ldquo;Services&rdquo;), you (&ldquo;Patient,&rdquo; &ldquo;you,&rdquo; or &ldquo;your&rdquo;) agree to be legally bound by these Terms of Service, our <a href="/privacy-policy">Privacy Policy</a>, our Notice of Privacy Practices, and any consent forms you execute in connection with your care.</p>
          <p>If you do not agree to these Terms, you must not use the Site or Services.</p>
          <p>These Terms apply to all users of the Site, including patients, parents or guardians acting on behalf of minor patients, and visitors. The practice is operated by <strong>Dr. Parth Bhavsar, M.D., Board-Certified Family Medicine</strong> (&ldquo;Provider&rdquo;), doing business as TeleDirectMD, with offices in Alpharetta, Georgia.</p>
          <p>Use of the Services constitutes your electronic signature and legally binding acceptance of these Terms, with the same force and effect as a handwritten signature.</p>

          {/* 2. ELIGIBILITY */}
          <h2>2. Eligibility</h2>
          <p>To use TeleDirectMD&apos;s Services, you must meet <strong>all</strong> of the following requirements:</p>

          <h3>2.1 Age</h3>
          <ul>
            <li>You must be <strong>18 years of age or older</strong> to book and use Services on your own behalf.</li>
            <li><strong>Minors between the ages of 5 and 17</strong> may be seen only with the active participation, real-time presence, and written consent of a parent or legal guardian. The parent or guardian must be present on-screen for the duration of the visit and must be the account holder.</li>
            <li>TeleDirectMD does <strong>not</strong> provide Services to individuals under 5 years of age.</li>
          </ul>

          <h3>2.2 Geographic Location</h3>
          <ul>
            <li>You must be <strong>physically located within one of the 42 jurisdictions</strong> where TeleDirectMD is licensed and authorized to provide care at the <strong>time of your visit</strong> (not merely at the time of scheduling).</li>
            <li>TeleDirectMD currently provides services in 41 U.S. states plus the District of Columbia. Not all states are covered. It is your responsibility to confirm service availability in your state before booking.</li>
            <li>If you are located in a state not covered by TeleDirectMD at the time of your visit, the appointment may be cancelled and a refund may be issued at TeleDirectMD&apos;s discretion.</li>
            <li>State licensure availability is subject to change. Current availability is listed on the Site.</li>
          </ul>

          <h3>2.3 Valid Identification</h3>
          <p>You must be able to present valid, government-issued photo identification at the time of your visit.</p>

          <h3>2.4 Technical Requirements</h3>
          <p>You must have access to a device capable of conducting a synchronous video visit (smartphone, tablet, or computer with camera and microphone) and a reliable internet connection.</p>

          {/* 3. DESCRIPTION OF SERVICES */}
          <h2>3. Description of Services</h2>

          <h3>3.1 Nature of Services</h3>
          <p>TeleDirectMD provides <strong>synchronous video-based virtual urgent care</strong> visits conducted by Dr. Parth Bhavsar. Services span a range of acute, chronic, and wellness-related conditions including (but not limited to) urgent care concerns, women&apos;s health, sexual health, skin conditions, chronic medication refills, and wellness and lifestyle consultations. A full list of conditions treated is available on the <a href="/what-we-treat">What We Treat</a> page.</p>

          <h3>3.2 Not Emergency Care</h3>
          <p><strong>TeleDirectMD is not an emergency medical service and cannot respond to medical emergencies.</strong> TeleDirectMD does not provide emergency care, 24/7 on-call care, inpatient care, or surgical services.</p>
          <div className="tos-notice tos-notice--danger">
            If you are experiencing a medical emergency — including chest pain, difficulty breathing, stroke symptoms, severe bleeding, loss of consciousness, or any other potentially life-threatening condition — call 911 or go to your nearest emergency room immediately. Do not use TeleDirectMD.
          </div>

          <h3>3.3 Not a Substitute for In-Person or Primary Care</h3>
          <p>TeleDirectMD is intended to supplement, not replace, your relationship with a primary care physician. Telemedicine has inherent limitations compared to in-person care, including the inability to perform physical examinations, auscultation, or certain diagnostic procedures.</p>

          <h3>3.4 Clinical Discretion and Referrals</h3>
          <p>The Provider retains full clinical discretion at all times. If the Provider determines that your condition is not appropriate for telehealth management, requires in-person evaluation, or requires specialist care beyond the scope of TeleDirectMD&apos;s Services, you will be informed and may be referred to appropriate in-person or specialist care. No charge will be assessed if the visit cannot be completed for clinical reasons at the Provider&apos;s determination prior to a clinical assessment being delivered, subject to TeleDirectMD&apos;s refund policy in Section 8.</p>

          <h3>3.5 Excuse Notes</h3>
          <p>TeleDirectMD offers work or school excuse note services. Excuse notes are available as a <strong>standalone service for $39</strong> or <strong>at no additional charge when obtained in connection with a qualifying visit</strong>. Excuse notes are provided at the clinical discretion of the Provider and are not guaranteed.</p>

          <h3>3.6 No Ongoing Provider-Patient Relationship</h3>
          <p>Unless expressly agreed otherwise, each TeleDirectMD visit constitutes a discrete, episodic encounter. TeleDirectMD does not establish an ongoing primary care relationship and does not guarantee continuous availability of the Provider.</p>

          {/* 4. NO CONTROLLED SUBSTANCES */}
          <h2>4. No Controlled Substances</h2>
          <p><strong>TeleDirectMD does not prescribe controlled substances of any kind, under any circumstances.</strong></p>
          <p>This prohibition applies to all substances classified as Schedule II through Schedule V under the federal Controlled Substances Act (21 U.S.C. § 801 et seq.), including but not limited to:</p>
          <ul>
            <li><strong>Opioid analgesics</strong> (e.g., oxycodone, hydrocodone, codeine, tramadol, fentanyl, morphine)</li>
            <li><strong>Benzodiazepines</strong> (e.g., alprazolam/Xanax, diazepam/Valium, lorazepam/Ativan, clonazepam/Klonopin)</li>
            <li><strong>Stimulants used for ADHD or weight loss</strong> (e.g., amphetamine/Adderall, methylphenidate/Ritalin, phentermine)</li>
            <li><strong>Sleep medications</strong> (e.g., zolpidem/Ambien, eszopiclone/Lunesta, temazepam)</li>
            <li><strong>Buprenorphine</strong> and other controlled substance medication-assisted treatment agents</li>
            <li>Any other Schedule II, III, IV, or V controlled substance</li>
          </ul>
          <p>This policy is consistent with the <strong>Ryan Haight Online Pharmacy Consumer Protection Act</strong> (21 U.S.C. § 829(e)), TeleDirectMD&apos;s clinical policies, and applicable state law.</p>
          <p><strong>If you are seeking a prescription for a controlled substance, TeleDirectMD cannot assist you, and you should contact your in-person primary care provider.</strong></p>
          <p>Requests for controlled substances will not be accommodated, and no refund will be issued solely because a patient&apos;s desired controlled substance prescription was not provided.</p>

          {/* 5. CONSENT TO TELEHEALTH */}
          <h2>5. Consent to Telehealth</h2>

          <h3>5.1 Informed Consent Form</h3>
          <p>Prior to your first visit, you will be required to complete a separate <strong>Informed Consent to Telehealth</strong> as part of the intake process conducted via TeleDirectMD&apos;s HIPAA-compliant intake platform. That consent form supplements these Terms and is incorporated herein by reference.</p>

          <h3>5.2 Acknowledgment of Telehealth Risks and Limitations</h3>
          <p>By scheduling a visit, you acknowledge and understand that:</p>
          <ul>
            <li>Telehealth involves the delivery of healthcare services using electronic communications and may include transmission of your medical information over the internet.</li>
            <li>Telehealth has inherent technical and clinical limitations, including but not limited to: inability to perform a physical examination; potential degradation of audio/video quality; and the possibility that your condition may require in-person evaluation that cannot be anticipated in advance.</li>
            <li>The transmission of medical information is subject to security risks, and despite HIPAA-compliant safeguards, no electronic transmission can be guaranteed to be completely secure.</li>
            <li>Technical failures may occur and could interrupt or terminate a visit. TeleDirectMD is not liable for such failures. See Section 9.</li>
          </ul>

          <h3>5.3 Right to Refuse or Withdraw Consent</h3>
          <p>You have the right to refuse telehealth services or to withdraw your consent at any time, without penalty to your future care. If you withdraw consent during a visit, the visit will be discontinued. Refund eligibility in such cases is governed by Section 8.</p>

          {/* 6. PATIENT RESPONSIBILITIES */}
          <h2>6. Patient Responsibilities</h2>
          <p>As a condition of using TeleDirectMD&apos;s Services, you agree to:</p>

          <h3>6.1 Provide Accurate and Complete Information</h3>
          <p>Provide truthful, complete, and accurate information about your identity, symptoms, medical history, current medications, supplements, known drug allergies, and all other clinically relevant information. You understand that the quality of your care depends on the accuracy of the information you provide. <strong>Providing false or misleading medical information may result in harm to you and may constitute misrepresentation that voids these Terms.</strong></p>

          <h3>6.2 Be Physically Present in a Covered State</h3>
          <p>Confirm and represent that you are physically located within a state where TeleDirectMD is licensed at the time of your visit.</p>

          <h3>6.3 Ensure a Suitable Environment</h3>
          <p>Be in a <strong>private, confidential setting</strong> during your visit to protect the privacy of your consultation and ensure candid communication with the Provider. Do not conduct your visit in a public place where the conversation could be overheard.</p>

          <h3>6.4 Maintain Adequate Technology</h3>
          <p>Ensure a <strong>reliable internet connection</strong> and functioning camera and microphone prior to your visit. Technical difficulties on your end do not entitle you to a refund of a completed visit.</p>

          <h3>6.5 Disclose All Medications and Allergies</h3>
          <p>Inform the Provider of all prescription medications, over-the-counter medications, vitamins, and supplements you are currently taking, as well as any known drug allergies or adverse reactions.</p>

          <h3>6.6 Present Valid Identification</h3>
          <p>Be prepared to present valid, government-issued photo identification when requested.</p>

          <h3>6.7 Follow Up as Directed</h3>
          <p>Comply with treatment plans and follow-up instructions provided by the Provider. Seek additional or emergency care if your condition worsens or does not improve as expected. TeleDirectMD cannot guarantee follow-up availability.</p>

          <h3>6.8 Not Record Visits</h3>
          <p>You may not audio or video record any telehealth visit without the prior written consent of TeleDirectMD and Dr. Bhavsar.</p>

          {/* 7. INSURANCE AND PAYMENT */}
          <h2>7. Insurance and Payment</h2>

          <h3>7.1 Cash Pay</h3>
          <p>The standard visit fee is <strong>$49.00</strong>, due and charged at the time of booking. This fee applies to patients paying out-of-pocket without insurance.</p>

          <h3>7.2 Accepted Insurance</h3>
          <p>TeleDirectMD accepts the following insurance plans in select states:</p>
          <ul>
            <li><strong>Blue Cross Blue Shield (BCBS)</strong></li>
            <li><strong>Aetna</strong></li>
            <li><strong>UnitedHealthcare</strong></li>
          </ul>
          <p>Insurance acceptance varies by state. It is your responsibility to verify that TeleDirectMD participates in your specific insurance plan and is covered in your state prior to booking an insurance-based appointment. Coverage is not guaranteed.</p>

          <h3>7.3 Patient Responsibility for Insurance Visits</h3>
          <p>If you are using insurance, you are responsible for all applicable <strong>copays, coinsurance, and deductibles</strong> as determined by your insurance plan. These amounts will be collected at or after the time of service.</p>
          <p>TeleDirectMD will submit claims to your insurance carrier on your behalf as a courtesy. However, <strong>TeleDirectMD does not guarantee insurance coverage, reimbursement, or that any claim will be approved.</strong> If your insurance denies a claim, you remain responsible for the full cost of services rendered.</p>

          <h3>7.4 Additional Costs Not Included</h3>
          <p>The visit fee does not include:</p>
          <ul>
            <li>Laboratory tests, imaging, or diagnostic services ordered in connection with your visit</li>
            <li>Prescription medications (costs are determined by your pharmacy and pharmacy benefit plan)</li>
            <li>Referrals to specialists</li>
            <li>Follow-up visits</li>
          </ul>
          <p>These are separate costs for which you are solely responsible.</p>

          <h3>7.5 Excuse Notes</h3>
          <p>Standalone work or school excuse note: <strong>$39.00</strong>, charged at time of request. Excuse notes obtained in connection with a completed visit are available at no additional charge at the Provider&apos;s discretion.</p>

          <h3>7.6 Payment Processing</h3>
          <p>Payments are processed securely through <strong>Stripe</strong>, a PCI-DSS-compliant payment processor. TeleDirectMD does not store full payment card numbers. By providing payment information, you authorize TeleDirectMD to charge the applicable fees.</p>

          {/* 8. CANCELLATION AND REFUND */}
          <h2>8. Cancellation and Refund Policy</h2>

          <h3>8.1 Cancellation and Rescheduling</h3>
          <p>Appointments may be <strong>cancelled or rescheduled up to 2 hours before</strong> the scheduled visit time without penalty. Cancellations made within 2 hours of the visit may result in forfeiture of the visit fee at TeleDirectMD&apos;s discretion.</p>
          <p>To cancel or reschedule, contact TeleDirectMD at <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a> or <a href="tel:+16789561855">(678) 956-1855</a> before the applicable deadline.</p>

          <h3>8.2 No-Shows</h3>
          <p>If you fail to appear for a scheduled visit without prior cancellation (&ldquo;no-show&rdquo;), the full visit fee is <strong>forfeited</strong>. No refund will be issued for no-shows.</p>

          <h3>8.3 Refunds</h3>
          <ul>
            <li><strong>Completed visits:</strong> No refunds will be issued for visits that have been conducted, regardless of whether a prescription, diagnosis, or specific treatment outcome was achieved.</li>
            <li><strong>Incomplete visits due to Provider determination:</strong> If the Provider determines before delivering a clinical assessment that your condition is not appropriate for telehealth, a refund may be issued at TeleDirectMD&apos;s discretion.</li>
            <li><strong>Technical failures on TeleDirectMD&apos;s end:</strong> If a visit cannot be completed due to a verifiable technical failure attributable to TeleDirectMD&apos;s systems, a refund or reschedule will be offered.</li>
            <li><strong>Technical failures on Patient&apos;s end:</strong> No refund will be issued for visits that could not be completed due to your internet, device, or technical issues.</li>
            <li><strong>All other refund requests</strong> will be evaluated on a case-by-case basis at the sole discretion of TeleDirectMD.</li>
          </ul>

          <h3>8.4 Refund Processing</h3>
          <p>Approved refunds will be credited to the original payment method within 5–10 business days.</p>

          {/* 9. LIMITATION OF LIABILITY */}
          <h2>9. Limitation of Liability</h2>
          <p><strong>PLEASE READ THIS SECTION CAREFULLY. IT LIMITS TELEDIRECTMD&apos;S LIABILITY TO YOU.</strong></p>

          <h3>9.1 Technology and Infrastructure</h3>
          <p>To the maximum extent permitted by applicable law, TeleDirectMD and Dr. Parth Bhavsar shall not be liable for:</p>
          <ul>
            <li>Failures, interruptions, errors, or delays in the transmission of data over the internet or any telecommunications network</li>
            <li>Loss or corruption of data transmitted in connection with a telehealth visit</li>
            <li>Unauthorized access to or alteration of your transmissions or data due to circumstances beyond TeleDirectMD&apos;s reasonable control</li>
            <li>Delays, cancellations, or disruptions in care attributable to technology failures, internet outages, power failures, acts of God, cyberattacks, or other force majeure events</li>
            <li>Any harm arising from your failure to maintain adequate technology, a private setting, or a reliable internet connection</li>
          </ul>

          <h3>9.2 Nature of Medicine</h3>
          <p>You acknowledge that <strong>medicine is not an exact science</strong>. TeleDirectMD makes no guarantee, representation, or warranty that any specific diagnosis will be made, that any treatment will achieve a particular result, that any prescribed medication will be effective, or that any referral will result in expedited or successful care.</p>

          <h3>9.3 Aggregate Liability Cap</h3>
          <p>To the maximum extent permitted by applicable law, TeleDirectMD&apos;s total aggregate liability to you for any claims arising out of or relating to these Terms or the Services shall not exceed the <strong>total fees actually paid by you for the specific service giving rise to the claim</strong>.</p>

          <h3>9.4 Exclusion of Certain Damages</h3>
          <p>To the maximum extent permitted by applicable law, TeleDirectMD shall not be liable for any <strong>indirect, incidental, consequential, special, exemplary, or punitive damages</strong>, including but not limited to loss of income, loss of opportunity, pain and suffering, emotional distress, or any other damages beyond the direct fees paid, regardless of whether TeleDirectMD was advised of the possibility of such damages.</p>

          <h3>9.5 Applicability</h3>
          <p>Some jurisdictions do not allow certain limitations of liability or exclusions of damages. In such jurisdictions, the limitations in this Section will apply only to the fullest extent permitted by law.</p>

          {/* 10. DISCLAIMER OF WARRANTIES */}
          <h2>10. Disclaimer of Warranties</h2>
          <p><strong>THE SERVICES AND SITE ARE PROVIDED ON AN &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; BASIS WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.</strong></p>
          <p>To the maximum extent permitted by applicable law, TeleDirectMD expressly disclaims all warranties, including but not limited to warranties of merchantability, fitness for a particular purpose, non-infringement, uninterrupted or error-free service, accuracy of content, and guaranteed clinical outcomes.</p>

          {/* 11. INDEMNIFICATION */}
          <h2>11. Indemnification</h2>
          <p>You agree to <strong>defend, indemnify, and hold harmless</strong> TeleDirectMD, Dr. Parth Bhavsar, and their respective agents, employees, contractors, successors, and assigns from and against any and all claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys&apos; fees) arising out of or relating to:</p>
          <ul>
            <li>Your misuse of the Site or Services, or use of the Services in violation of these Terms</li>
            <li>Your provision of false, inaccurate, or misleading information to TeleDirectMD or the Provider</li>
            <li>Your violation of any applicable law, regulation, or third-party right in connection with your use of the Services</li>
            <li>Any dispute between you and a third party arising from your use of the Services</li>
            <li>Any claim by your insurance company relating to services rendered by TeleDirectMD</li>
          </ul>

          {/* 12. DISPUTE RESOLUTION */}
          <h2>12. Dispute Resolution and Arbitration</h2>
          <div className="tos-notice tos-notice--warning" style={{ marginBottom: 16 }}>
            IMPORTANT: THIS SECTION REQUIRES YOU TO RESOLVE MOST DISPUTES THROUGH BINDING INDIVIDUAL ARBITRATION RATHER THAN IN COURT. YOU ARE WAIVING YOUR RIGHT TO A JURY TRIAL AND YOUR RIGHT TO PARTICIPATE IN A CLASS ACTION.
          </div>

          <h3>12.1 Informal Resolution First</h3>
          <p>Before initiating formal arbitration, you agree to contact TeleDirectMD at <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a> and describe your dispute in writing. TeleDirectMD will attempt to informally resolve the dispute within <strong>30 days</strong> of receipt.</p>

          <h3>12.2 Binding Arbitration</h3>
          <p>Except as provided in Section 12.5, all disputes arising out of or relating to these Terms, the Services, the provider-patient relationship, or any aspect of your use of the Site shall be resolved by <strong>final and binding individual arbitration</strong>, administered by the American Arbitration Association (AAA) under its Healthcare Due Process Protocol and applicable AAA Consumer Arbitration Rules.</p>

          <h3>12.3 Arbitration Procedures</h3>
          <ul>
            <li>Arbitration will be conducted by a single neutral arbitrator.</li>
            <li>The seat of arbitration shall be Fulton County, Georgia, unless the parties agree to proceedings by video conference or telephone.</li>
            <li>The arbitrator shall apply the substantive law of the State of Georgia, without regard to conflicts of law principles.</li>
            <li>The arbitrator&apos;s decision shall be final and binding and may be entered as a judgment in any court of competent jurisdiction.</li>
          </ul>

          <h3>12.4 Class Action Waiver</h3>
          <p><strong>All claims must be brought in the parties&apos; individual capacity, and not as a plaintiff or class member in any purported class or representative proceeding.</strong> The arbitrator has no authority to hear any claims on a class or collective basis.</p>

          <h3>12.5 Exceptions</h3>
          <p>The following are not subject to the arbitration requirement: claims that qualify for small claims court (individual basis only), claims for emergency injunctive or equitable relief, and healthcare-specific disputes that applicable law expressly requires be handled outside of arbitration.</p>

          <h3>12.6 Opt-Out Right</h3>
          <p>You may <strong>opt out of this arbitration agreement</strong> by sending written notice to <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a> within <strong>30 days of your first use of the Services</strong> or your acceptance of these Terms, whichever is earlier. Your opt-out notice must include your name, contact information, and a clear statement that you wish to opt out.</p>

          <h3>12.7 Governing Law and Venue</h3>
          <p>These Terms shall be governed by and construed in accordance with the laws of the <strong>State of Georgia</strong>, without regard to its conflict of law provisions. For any claims not subject to arbitration, the parties consent to exclusive jurisdiction and venue in the state or federal courts located in Fulton County, Georgia.</p>

          {/* 13. INTELLECTUAL PROPERTY */}
          <h2>13. Intellectual Property</h2>
          <p>All content, materials, features, and functionality available on the Site — including text, graphics, logos, icons, images, audio clips, data compilations, software, and the design and compilation thereof — are the <strong>exclusive property of TeleDirectMD and Dr. Parth Bhavsar</strong>, protected by United States and international intellectual property laws.</p>
          <p>TeleDirectMD grants you a limited, non-exclusive, non-transferable, revocable license to access and use the Site for your personal, non-commercial use in connection with obtaining healthcare services. You may not reproduce, distribute, modify, or create derivative works from any content without prior written consent.</p>

          {/* 14. PRIVACY AND HIPAA */}
          <h2>14. Privacy and HIPAA</h2>
          <p>TeleDirectMD&apos;s collection, use, and protection of your personal information is governed by our <a href="/privacy-policy">Privacy Policy</a>, which is incorporated herein by reference. As a covered healthcare entity under HIPAA, TeleDirectMD maintains a Notice of Privacy Practices (NPP) that describes how your protected health information may be used and disclosed.</p>
          <p>TeleDirectMD uses HIPAA-compliant platforms including JotForm (intake forms), Elation EHR (clinical documentation), and Stripe (payment processing). Business Associate Agreements (BAAs) are maintained with each applicable service provider. Your protected health information will not be used for marketing purposes without your explicit written authorization.</p>

          {/* 15. COMMUNICATIONS */}
          <h2>15. Communications</h2>
          <p>By providing your email address and phone number to TeleDirectMD, you consent to receive <strong>operational and transactional communications</strong> related to your care, including appointment confirmations, reminders, follow-up instructions, billing statements, and communications required by law.</p>
          <p>TeleDirectMD will not send you marketing or promotional communications without your <strong>separate, affirmative opt-in consent</strong>. You may withdraw marketing consent at any time by following the unsubscribe instructions in any marketing email or by contacting us at <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a>.</p>

          {/* 16. MODIFICATIONS */}
          <h2>16. Modifications to These Terms</h2>
          <p>TeleDirectMD reserves the right to modify these Terms at any time. All modifications will be posted on this page with an updated effective date. For material changes, TeleDirectMD will use reasonable efforts to provide notice by posting a prominent notice on the Site or by sending an email at least 7 days before the changes take effect, where practicable.</p>
          <p><strong>Your continued use of the Site or Services after the effective date of any modification constitutes your acceptance of the revised Terms.</strong></p>

          {/* 17. SEVERABILITY */}
          <h2>17. Severability</h2>
          <p>If any provision of these Terms is found by a court or arbitrator to be invalid, illegal, or unenforceable, that provision shall be modified to the minimum extent necessary to make it enforceable, or, if modification is not possible, it shall be severed. The remaining provisions shall continue in full force and effect.</p>

          {/* 18. ENTIRE AGREEMENT */}
          <h2>18. Entire Agreement</h2>
          <p>These Terms, together with the <a href="/privacy-policy">Privacy Policy</a>, Notice of Privacy Practices, <a href="/telehealth-consent">Informed Consent to Telehealth</a>, and any other consent forms executed in connection with your care, constitute the entire agreement between you and TeleDirectMD. No verbal representation or prior course of dealing shall modify or supplement these Terms.</p>

          {/* 19. CONTACT */}
          <h2>19. Contact Information</h2>
          <p>If you have questions about these Terms, wish to exercise any rights described herein, or need to contact TeleDirectMD for any reason:</p>
          <p className="tos-contact">
            <strong>TeleDirectMD</strong><br />
            Alpharetta, Georgia<br />
            Phone: <a href="tel:+16789561855">(678) 956-1855</a><br />
            Email: <a href="mailto:contact@teledirectmd.com">contact@teledirectmd.com</a><br />
            Website: <a href="https://teledirectmd.com">teledirectmd.com</a>
          </p>
          <div className="tos-notice tos-notice--danger">
            For medical emergencies, do not contact us — call 911 or go to your nearest emergency room.
          </div>

          <p className="tos-footnote">These Terms of Service were last updated on April 16, 2026. TeleDirectMD recommends that patients review these Terms periodically for changes. Your continued use of the Site or Services constitutes acceptance of the Terms as currently posted.</p>
          <p className="tos-footnote">This document does not constitute legal advice. If you have questions about your rights or obligations under these Terms, please consult a qualified attorney.</p>
        </section>
      </div>
    </>
  );
}

const tosPageCSS = `
  .tos-page {
    max-width: 800px;
    margin: 0 auto;
    padding: 48px 24px 96px;
    font-family: 'Almarai', system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", "Segoe UI", sans-serif;
    color: var(--tdmd-text, #12323a);
  }

  .tos-title {
    font-family: 'Almarai', sans-serif;
    font-size: 2.15rem;
    font-weight: 700;
    color: var(--tdmd-navy, #003e52);
    margin: 0 0 6px;
    letter-spacing: -0.01em;
    line-height: 1.2;
  }

  .tos-effective {
    color: var(--tdmd-muted, #4b5f66);
    font-size: 0.95rem;
    margin: 0 0 28px;
  }

  .tos-disclaimer {
    color: var(--tdmd-muted, #4b5f66);
    font-size: 0.9rem;
    font-style: italic;
    margin: 0 0 36px;
    line-height: 1.6;
  }

  /* Notice boxes */
  .tos-notice {
    border-radius: 10px;
    padding: 20px 24px;
    margin-bottom: 32px;
    line-height: 1.7;
    font-size: 0.95rem;
  }
  .tos-notice p {
    margin: 0 0 10px;
  }
  .tos-notice--warning {
    background: rgba(255, 193, 7, 0.1);
    border: 1px solid rgba(255, 193, 7, 0.35);
    color: var(--tdmd-text, #12323a);
  }
  .tos-notice--danger {
    background: rgba(231, 76, 60, 0.08);
    border: 1px solid rgba(231, 76, 60, 0.3);
    font-weight: 600;
    padding: 16px 20px;
    color: var(--tdmd-text, #12323a);
  }
  .tos-notice-heading {
    font-weight: 700;
    margin-bottom: 14px !important;
  }

  /* Dark mode notice adjustments */
  @media (prefers-color-scheme: dark) {
    :root:not([data-theme="light"]) .tos-notice--warning {
      background: rgba(255, 193, 7, 0.08);
      border-color: rgba(255, 193, 7, 0.2);
    }
    :root:not([data-theme="light"]) .tos-notice--danger {
      background: rgba(231, 76, 60, 0.1);
      border-color: rgba(231, 76, 60, 0.2);
    }
  }
  :root[data-theme="dark"] .tos-notice--warning {
    background: rgba(255, 193, 7, 0.08);
    border-color: rgba(255, 193, 7, 0.2);
  }
  :root[data-theme="dark"] .tos-notice--danger {
    background: rgba(231, 76, 60, 0.1);
    border-color: rgba(231, 76, 60, 0.2);
  }

  /* Body content */
  .tos-body {
    line-height: 1.8;
    color: var(--tdmd-text, #12323a);
    font-size: 1rem;
  }
  .tos-body h2 {
    font-family: 'Almarai', sans-serif;
    font-size: 1.35rem;
    font-weight: 700;
    margin: 40px 0 14px;
    color: var(--tdmd-navy, #003e52);
    letter-spacing: -0.005em;
  }
  .tos-body h3 {
    font-family: 'Almarai', sans-serif;
    font-size: 1.08rem;
    font-weight: 700;
    margin: 28px 0 10px;
    color: var(--tdmd-navy, #003e52);
  }
  .tos-body p {
    margin: 0 0 14px;
  }
  .tos-body ul {
    padding-left: 24px;
    margin: 8px 0 16px;
  }
  .tos-body li {
    margin-bottom: 6px;
    line-height: 1.7;
  }
  .tos-body a {
    color: var(--tdmd-teal, #006b73);
    text-decoration: underline;
    text-underline-offset: 2px;
    font-weight: 600;
  }
  .tos-body a:hover {
    color: var(--tdmd-navy, #003e52);
  }
  .tos-body strong {
    font-weight: 700;
    color: var(--tdmd-text, #12323a);
  }

  .tos-contact {
    margin-top: 10px;
    line-height: 1.9;
  }

  .tos-footnote {
    color: var(--tdmd-muted, #4b5f66);
    font-size: 0.9rem;
    font-style: italic;
    margin-top: 32px;
    line-height: 1.6;
  }
  .tos-footnote + .tos-footnote {
    margin-top: 8px;
  }

  /* Mobile refinements */
  @media (max-width: 768px) {
    .tos-page {
      padding: 32px 20px 80px;
    }
    .tos-title {
      font-size: 1.75rem;
    }
    .tos-body h2 {
      font-size: 1.2rem;
      margin-top: 32px;
    }
    .tos-body h3 {
      font-size: 1rem;
    }
    .tos-notice {
      padding: 16px 18px;
    }
  }
`;
