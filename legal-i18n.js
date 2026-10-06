(() => {
  const languages = {
    ja: '日本語',
    en: 'English',
    ko: '한국어',
    zh: '简体中文',
    'zh-TW': '繁體中文（台灣）',
  };
  const routes = {
    privacy: 'index.html',
    terms: 'about.html',
    about: 'about-info.html',
    contact: 'contact.html',
    deletion: 'deletion.html',
  };
  const copy = {
    en: {
      nav: {
        privacy: 'Privacy Policy',
        terms: 'Terms of Service',
        about: 'About TrueSkin',
        contact: 'Contact',
        deletion: 'Account Deletion',
        language: 'Language',
      },
      pages: {
        privacy: {
          title: 'TrueSkin Privacy Policy',
          html: `
            <h1>TrueSkin Privacy Policy</h1>
            <p>This Privacy Policy explains what information the TrueSkin app (the “Service”) may collect and how it is used. We respect your privacy.</p>
            <h2>Information We May Collect</h2>
            <p>We may collect the following information as needed to provide the Service:</p>
            <ul>
              <li>Email address and authentication information associated with your Apple ID or Google account</li>
              <li>Images captured with the camera or selected by you</li>
              <li>AI analysis results</li>
              <li>Device information, app usage, error information, and other logs</li>
              <li>Information needed to provide the Service, such as the status of in-app purchases</li>
            </ul>
            <h2>Camera and Photos</h2>
            <p>The Service uses your camera or photo library only after you take an explicit action to use the image analysis feature. The app does not take photos in the background.</p>
            <h2>Face Photos and Face Data</h2>
            <p>The Service uses a face photo that you capture or select to analyze skin condition with AI.</p>
            <p>The face data handled by the Service is an ordinary face photo that you voluntarily capture or select.</p>
            <p>The Service does not collect Face ID data, facial-recognition templates, facial feature vectors, facial geometry data, or biometric information for identifying a person.</p>
            <p>Face photos are used only to analyze skin condition, estimate skin age and condition, display results, and let you record and review your own skin condition.</p>
            <p>Face photos are not used for identity verification, facial recognition, personal identification, advertising, tracking, or profiling.</p>
            <h2>Images and Analysis Results</h2>
            <p>Images you capture or select are used to perform image analysis and display the results.</p>
            <p>The Service does not store your face photos on its servers.</p>
            <p>Face photos and AI analysis results are stored as app-managed data on your device.</p>
            <p>After image analysis is complete, face photos are not retained on the Service's servers.</p>
            <h2>How We Use Information</h2>
            <ul>
              <li>Sign-in and authentication</li>
              <li>AI-powered skin analysis</li>
              <li>Estimating skin age and condition</li>
              <li>Displaying analysis results</li>
              <li>Providing history features so you can record and review your skin condition</li>
              <li>Checking in-app purchase status</li>
              <li>Providing, maintaining, and improving the Service</li>
              <li>Preventing misuse, addressing service issues, and responding to inquiries</li>
            </ul>
            <h2>Third-Party Services</h2>
            <p>The Service may use third-party services, including Apple, Google, Google Gemini API, and Amazon Web Services (AWS), for sign-in, user management, purchase-status checks, and image analysis.</p>
            <p>Face photos that you capture or select are sent to the Google Gemini API to generate AI analysis results.</p>
            <p>Images sent to the Google Gemini API are used only to generate skin-analysis results.</p>
            <p>Face photos are not provided to third parties for advertising, tracking, personal identification, or facial recognition.</p>
            <p>Payments for iOS in-app purchases are processed by the Apple App Store. The Service operator does not collect or store payment details such as credit-card numbers.</p>
            <h2>Disclosure to Third Parties</h2>
            <p>We do not provide users' personal information to third parties except where required by law.</p>
            <p>We do not sell, rent, or share face photos for advertising.</p>
            <h2>Data Retention</h2>
            <p>The Service does not retain face photos on its servers.</p>
            <p>Face photos and AI analysis results are stored on your device and remain there until you delete them in the app or on your device.</p>
            <p>Information needed to provide the Service, such as account information, purchase status, and logs, may be retained for as long as needed to provide the Service, address service issues, prevent misuse, and respond to inquiries.</p>
            <h2>Account Deletion</h2>
            <p>You can request account deletion in the app's Settings or by contacting us. See the <a href="./deletion.html">Account Deletion page</a> for details.</p>
            <h2>Disclaimer</h2>
            <p>Analysis results are provided for general beauty and skincare reference only. They are not medical services, diagnosis, treatment, disease detection, or professional advice.</p>
            <h2>Contact</h2>
            <p>For questions about this policy, contact us at:</p>
            <p><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></p>
            <h2>Operator</h2>
            <p>Operator: Takashi Nishimoto</p>
            <p>Established: December 21, 2025<br>Last updated: May 18, 2026</p>`,
        },
        terms: {
          title: 'TrueSkin Terms of Service',
          html: `
            <h1>TrueSkin Terms of Service</h1>
            <p>These Terms of Service (the “Terms”) set out the conditions for using TrueSkin (the “Service”).</p>
            <p>By using the Service, you are deemed to have agreed to these Terms.</p>
            <h2>Article 1 (About the Service)</h2><p>The Service analyzes images captured or selected by users and provides information about skin condition.</p><p>Analysis results are provided as reference information for everyday skincare and similar purposes. They are not intended to provide medical care, diagnosis, or treatment.</p><p>If you have concerns about your skin, consult a medical institution or qualified professional.</p>
            <h2>Article 2 (Use of Images)</h2><p>Images captured or selected by users are used to analyze the images and display the results.</p><p>Images will not be used for purposes unrelated to analysis.</p><p>The handling of images and other information is governed by the separately provided Privacy Policy.</p>
            <h2>Article 3 (Accounts)</h2><p>An account may be required to use some Service features.</p><p>Users must provide accurate registration information and keep it up to date as necessary.</p><p>Users are responsible for properly managing their accounts and login information.</p><p>If unauthorized use by a third party is suspected, contact the operator promptly.</p>
            <h2>Article 4 (Paid Services)</h2><p>Some Service features may be offered for a fee.</p><p>The price, term, features, and other conditions of a paid service will be shown on the purchase screen or elsewhere.</p><p>Users must review the displayed information before making a purchase.</p><p>Payments may be processed through Apple App Store, Google Play, or another payment provider.</p>
            <h2>Article 5 (Cancellation and Refunds)</h2><p>If a recurring service is offered, users must cancel it through the relevant app store or other specified method.</p><p>Deleting the app may not stop recurring charges.</p><p>Refunds are subject to the terms of Apple App Store, Google Play, or the payment provider used for the purchase.</p><p>Except where a refund is required by law, the operator does not independently guarantee refunds.</p>
            <h2>Article 6 (Prohibited Conduct)</h2><p>Users must not engage in any of the following when using the Service:</p><ul><li>Conduct that violates laws or public order and morals</li><li>Fraudulent use of the Service</li><li>Impersonating another person</li><li>Infringing another person's rights or interests</li><li>Interfering with the operation of the Service</li><li>Unauthorized access to the Service or its systems</li><li>Unauthorized analysis, modification, or use of the Service's programs, analysis methods, or other mechanisms</li><li>Any other conduct the operator considers inappropriate</li></ul>
            <h2>Article 7 (Intellectual Property)</h2><p>Copyrights, trademarks, and other intellectual property rights in the programs, designs, text, images, logos, analysis methods, and other content included in the Service belong to the operator or the relevant third-party rights holders.</p><p>Except as permitted by law, users may not reproduce, republish, modify, distribute, or commercially use these materials without the operator's permission.</p><p>Rights in images and other materials that users provide to the Service are not transferred to the operator.</p>
            <h2>Article 8 (Disclaimer)</h2><p>Analysis results are provided for reference only.</p><p>The operator does not guarantee the accuracy, completeness, usefulness, or fitness of the results for a particular purpose.</p><p>Results may vary depending on conditions such as the shooting environment, lighting, camera performance, face angle, and image quality.</p><p>Except where applicable law does not permit the operator to exclude liability, the operator is not liable for damage arising from use of the Service or decisions or actions users take based on analysis results.</p>
            <h2>Article 9 (Changes to or Suspension of the Service)</h2><p>The operator may change, suspend, or discontinue all or part of the Service for system maintenance, outages, changes to Service content, or other reasons.</p>
            <h2>Article 10 (Suspension of Use and Account Deletion)</h2><p>If a user violates these Terms, or if the operator otherwise determines that continued use is inappropriate, the operator may suspend the user's use of the Service or delete the user's account without prior notice.</p>
            <h2>Article 11 (Changes to These Terms)</h2><p>The operator may change these Terms as necessary in accordance with applicable laws.</p><p>Changes will be announced by posting the revised Terms on the Service or a related website, or by another appropriate method.</p>
            <h2>Article 12 (Governing Law and Jurisdiction)</h2><p>These Terms are governed by the laws of Japan.</p><p>Any dispute concerning the Service will be resolved in accordance with the laws and regulations of Japan.</p>
            <h2>Article 13 (Contact)</h2><p>Inquiries about the Service are accepted through the method described in the Service or on a related website.</p>
            <p>Established: December 21, 2025<br>Last revised: October 6, 2026</p>`,
        },
        about: {
          title: 'About TrueSkin',
          html: `<h1>About TrueSkin</h1><p>TrueSkin is an independently developed app that uses camera images to provide users with easy-to-understand analysis information.</p><p>Please use analysis results as general reference information for everyday use.</p>`,
        },
        contact: {
          title: 'Contact TrueSkin',
          html: `<h1>Contact</h1><p>For questions or inquiries, contact us at the email address below.</p><p>Email:<br><strong><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></strong></p>`,
        },
        deletion: {
          title: 'Account Deletion - TrueSkin',
          html: `
            <h1>Account Deletion</h1>
            <section class="card"><p>This page explains how to delete your TrueSkin account.</p>
            <h2>Delete in the App (Recommended)</h2>
            <ol><li>Sign in to the app.</li><li>Open <strong>Settings</strong> and select <strong>Delete Account</strong>.</li><li>Follow the confirmation prompts to complete deletion.</li></ol>
            <p class="muted">Deletion cannot be undone. Photos, results, and other data stored locally by the app will be removed from your device.</p>
            <h2>Data Deleted</h2>
            <ul><li>Authentication information (the user record in Cognito)</li><li>Minimal user information, such as purchase status (the record in DynamoDB)</li><li>Photos, analysis results, and other local data managed by the app</li></ul>
            <p class="muted">The app does not store photos or analysis results on its servers (including S3).</p>
            <h2>If You Cannot Access the App</h2>
            <p>If you cannot delete your account in the app, for example because your device was lost, contact us at:</p>
            <p>Email: <a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a><br>Suggested subject: TrueSkin account deletion request<br>Please include the email address used to register or your sign-in method.</p>
            <h2>Completion Time</h2><p>We generally complete deletion within <strong>30 days</strong> after receiving your request, and usually sooner.</p>
            <h2>Information That May Be Retained</h2><p class="muted">A minimal amount of log information may be retained for a limited period to comply with law or prevent misuse.</p></section>
            <p class="muted">Last updated: January 12, 2026</p>`,
        },
      },
    },
    ko: {
      nav: {
        privacy: '개인정보 처리방침',
        terms: '이용약관',
        about: 'TrueSkin 소개',
        contact: '문의하기',
        deletion: '계정 삭제',
        language: '언어',
      },
      pages: {
        privacy: {
          title: 'TrueSkin 개인정보 처리방침',
          html: `
            <h1>TrueSkin 개인정보 처리방침</h1>
            <p>본 개인정보 처리방침은 TrueSkin 앱(이하 “서비스”)이 수집할 수 있는 정보와 그 이용 방법을 설명합니다. 서비스는 사용자의 개인정보를 소중히 다룹니다.</p>
            <h2>수집할 수 있는 정보</h2><p>서비스 제공에 필요한 범위에서 다음 정보를 수집할 수 있습니다.</p>
            <ul><li>이메일 주소 및 Apple ID 또는 Google 계정과 관련된 인증 정보</li><li>카메라로 촬영하거나 사용자가 선택한 이미지</li><li>AI 분석 결과</li><li>기기 정보, 앱 이용 현황, 오류 정보 등의 로그</li><li>인앱 구매의 유효 상태 등 서비스 제공에 필요한 정보</li></ul>
            <h2>카메라 및 사진의 이용</h2><p>서비스는 사용자가 이미지 분석 기능을 사용하기 위해 명시적으로 조작한 경우에만 카메라 또는 사진 라이브러리를 사용합니다. 백그라운드에서 촬영하지 않습니다.</p>
            <h2>얼굴 사진 및 얼굴 데이터</h2><p>서비스는 사용자가 촬영하거나 선택한 얼굴 사진을 AI 피부 상태 분석에 사용합니다.</p><p>서비스가 취급하는 얼굴 데이터는 사용자가 자발적으로 촬영하거나 선택한 일반 얼굴 사진입니다.</p><p>서비스는 Face ID 데이터, 얼굴 인식 템플릿, 얼굴 특징 벡터, 얼굴 형상 데이터 또는 개인 식별을 목적으로 하는 생체 정보를 수집하지 않습니다.</p><p>얼굴 사진은 피부 상태 분석, 피부 나이 및 상태 추정, 결과 표시, 사용자가 자신의 피부 상태를 기록하고 확인하는 목적으로만 사용됩니다.</p><p>얼굴 사진은 본인 확인, 얼굴 인식, 개인 식별, 광고, 추적 또는 프로파일링에 사용되지 않습니다.</p>
            <h2>이미지 및 분석 결과</h2><p>촬영하거나 선택한 이미지는 이미지 분석 및 결과 표시를 위해 사용됩니다.</p><p>서비스는 사용자의 얼굴 사진을 서비스 서버에 저장하지 않습니다.</p><p>얼굴 사진과 AI 분석 결과는 앱이 관리하는 기기 내 데이터로 저장됩니다.</p><p>분석 처리가 완료된 후 얼굴 사진은 서비스 서버에 보관되지 않습니다.</p>
            <h2>정보의 이용 목적</h2><ul><li>로그인 및 인증</li><li>AI 피부 상태 분석</li><li>피부 나이 및 피부 상태 추정</li><li>분석 결과 표시</li><li>사용자가 피부 상태를 기록하고 확인할 수 있는 기록 기능 제공</li><li>인앱 구매 상태 확인</li><li>서비스 제공, 유지 및 개선</li><li>부정 이용 방지, 장애 대응 및 문의 응대</li></ul>
            <h2>외부 서비스 이용</h2><p>서비스는 로그인 인증, 사용자 관리, 구매 상태 확인, 이미지 분석 등을 위해 Apple, Google, Google Gemini API, Amazon Web Services(AWS) 등의 외부 서비스를 이용할 수 있습니다.</p><p>사용자가 촬영하거나 선택한 얼굴 사진은 AI 분석 결과 생성을 위해 Google Gemini API로 전송됩니다.</p><p>Google Gemini API로 전송된 이미지는 피부 분석 결과 생성에만 사용됩니다.</p><p>얼굴 사진은 광고, 추적, 개인 식별 또는 얼굴 인식을 목적으로 제3자에게 제공되지 않습니다.</p><p>iOS 인앱 구매 결제는 Apple App Store가 처리합니다. 서비스 운영자는 신용카드 번호 등의 결제 정보를 수집하거나 저장하지 않습니다.</p>
            <h2>제3자 제공</h2><p>법령에 근거한 경우를 제외하고 사용자의 개인정보를 제3자에게 제공하지 않습니다.</p><p>얼굴 사진을 판매, 대여하거나 광고 목적으로 공유하지 않습니다.</p>
            <h2>데이터 보관 기간</h2><p>서비스는 얼굴 사진을 서비스 서버에 보관하지 않습니다.</p><p>얼굴 사진과 AI 분석 결과는 기기에 저장되며, 사용자가 앱 또는 기기에서 삭제할 때까지 보관됩니다.</p><p>계정 정보, 구매 상태, 로그 등 서비스 제공에 필요한 정보는 서비스 제공, 장애 대응, 부정 이용 방지 및 문의 응대에 필요한 기간 동안 보관될 수 있습니다.</p>
            <h2>계정 삭제</h2><p>앱의 설정 또는 문의를 통해 계정 삭제를 요청할 수 있습니다. 자세한 내용은 <a href="./deletion.html">계정 삭제 안내</a>를 확인하세요.</p>
            <h2>주의 사항</h2><p>분석 결과는 일상적인 뷰티 및 피부 관리 참고용이며, 의료 행위, 진단, 치료, 질병 탐지 또는 전문적인 조언을 목적으로 하지 않습니다.</p>
            <h2>문의</h2><p>본 방침에 관한 문의는 다음 이메일로 연락해 주세요.</p><p><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></p>
            <h2>운영자</h2><p>운영자: 니시모토 타카시</p><p>제정일: 2025년 12월 21일<br>최종 업데이트: 2026년 5월 18일</p>`,
        },
        terms: {
          title: 'TrueSkin 이용약관',
          html: `
            <h1>TrueSkin 이용약관</h1><p>본 이용약관(이하 “본 약관”)은 TrueSkin(이하 “본 서비스”)의 이용 조건을 정합니다.</p><p>본 서비스를 이용하면 본 약관에 동의한 것으로 간주됩니다.</p>
            <h2>제1조 (본 서비스에 대하여)</h2><p>본 서비스는 사용자가 촬영하거나 선택한 이미지를 분석하여 피부 상태에 관한 정보를 제공합니다.</p><p>분석 결과는 일상적인 피부 관리 등을 위한 참고 정보이며, 의료 행위, 진단 또는 치료를 목적으로 하지 않습니다.</p><p>피부 상태에 대해 걱정되는 점이 있으면 의료기관 또는 전문가와 상담해 주세요.</p>
            <h2>제2조 (이미지의 이용)</h2><p>사용자가 촬영하거나 선택한 이미지는 이미지 분석 및 분석 결과 표시를 위해 사용됩니다.</p><p>이미지는 분석 목적 이외의 용도로 사용하지 않습니다.</p><p>이미지 및 기타 정보의 취급은 별도로 정한 개인정보 처리방침을 따릅니다.</p>
            <h2>제3조 (계정)</h2><p>본 서비스의 일부 기능을 이용하려면 계정 등록이 필요할 수 있습니다.</p><p>사용자는 정확한 등록 정보를 제공하고 필요한 경우 최신 상태로 유지해야 합니다.</p><p>사용자는 자신의 계정 및 로그인 정보를 적절히 관리할 책임이 있습니다.</p><p>제3자의 부정 사용이 의심되면 운영자에게 신속히 연락해 주세요.</p>
            <h2>제4조 (유료 서비스)</h2><p>본 서비스의 일부 기능은 유료로 제공될 수 있습니다.</p><p>유료 서비스의 가격, 이용 기간, 제공 내용 및 기타 조건은 구매 화면 등에 표시됩니다.</p><p>사용자는 구매 전에 표시된 내용을 확인해야 합니다.</p><p>결제는 Apple App Store, Google Play 또는 기타 결제 사업자가 제공하는 결제 방법으로 이루어질 수 있습니다.</p>
            <h2>제5조 (해지 및 환불)</h2><p>정기 결제 서비스를 제공하는 경우 사용자는 각 앱 스토어 또는 지정된 방법으로 해지해야 합니다.</p><p>앱을 삭제하는 것만으로는 정기 결제가 중지되지 않을 수 있습니다.</p><p>환불은 구매에 이용한 Apple App Store, Google Play 또는 기타 결제 사업자의 조건을 따릅니다.</p><p>법률상 환불이 필요한 경우를 제외하고 운영자가 별도로 환불을 보장하지 않습니다.</p>
            <h2>제6조 (금지 행위)</h2><p>사용자는 본 서비스를 이용할 때 다음 행위를 해서는 안 됩니다.</p><ul><li>법령 또는 공공질서와 미풍양속에 위반되는 행위</li><li>본 서비스를 부정하게 이용하는 행위</li><li>타인을 사칭하는 행위</li><li>타인의 권리 또는 이익을 침해하는 행위</li><li>본 서비스의 운영을 방해하는 행위</li><li>본 서비스 또는 시스템에 무단으로 접근하는 행위</li><li>본 서비스의 프로그램, 분석 방법 및 기타 구조를 부정하게 분석, 변경 또는 이용하는 행위</li><li>그 밖에 운영자가 부적절하다고 판단하는 행위</li></ul>
            <h2>제7조 (지식재산권)</h2><p>본 서비스에 포함된 프로그램, 디자인, 문장, 이미지, 로고, 분석 방법 및 기타 콘텐츠에 관한 저작권, 상표권 및 기타 지식재산권은 운영자 또는 정당한 권리를 보유한 제3자에게 귀속됩니다.</p><p>법률상 허용되는 경우를 제외하고 사용자는 운영자의 허가 없이 이를 복제, 재게시, 수정, 배포 또는 상업적으로 이용할 수 없습니다.</p><p>사용자가 본 서비스에 제공한 이미지 등의 권리는 운영자에게 이전되지 않습니다.</p>
            <h2>제8조 (면책사항)</h2><p>본 서비스의 분석 결과는 참고 정보로 제공됩니다.</p><p>운영자는 결과의 정확성, 완전성, 유용성 또는 특정 목적에 대한 적합성을 보장하지 않습니다.</p><p>촬영 환경, 조명, 카메라 성능, 얼굴 방향, 이미지 품질 등의 조건에 따라 결과가 달라질 수 있습니다.</p><p>관련 법령상 책임을 면제할 수 없는 경우를 제외하고, 운영자는 본 서비스의 이용 또는 분석 결과에 근거한 사용자의 판단이나 행위로 발생한 손해에 대해 책임을 지지 않습니다.</p>
            <h2>제9조 (서비스 내용의 변경 및 중단)</h2><p>운영자는 시스템 유지보수, 장애, 서비스 내용 변경 또는 기타 사유로 본 서비스의 전부 또는 일부를 변경, 중단 또는 종료할 수 있습니다.</p>
            <h2>제10조 (이용 정지 및 계정 삭제)</h2><p>사용자가 본 약관을 위반한 경우 또는 운영자가 서비스 이용을 계속하는 것이 적절하지 않다고 판단한 경우, 사전 통지 없이 서비스 이용을 정지하거나 계정을 삭제할 수 있습니다.</p>
            <h2>제11조 (본 약관의 변경)</h2><p>운영자는 법령에 따라 필요한 경우 본 약관을 변경할 수 있습니다.</p><p>변경된 약관은 본 서비스 또는 관련 웹사이트에 게시하거나 기타 적절한 방법으로 안내합니다.</p>
            <h2>제12조 (준거법 및 관할)</h2><p>본 약관은 일본법을 준거법으로 합니다.</p><p>본 서비스에 관한 분쟁은 일본 국내 법령에 따라 해결합니다.</p>
            <h2>제13조 (문의)</h2><p>본 서비스에 관한 문의는 본 서비스 또는 관련 웹사이트에 기재된 방법으로 접수합니다.</p><p>제정일: 2025년 12월 21일<br>최종 개정일: 2026년 10월 6일</p>`,
        },
        about: {
          title: 'TrueSkin 소개',
          html: `<h1>TrueSkin 소개</h1><p>TrueSkin은 카메라 이미지를 분석하여 사용자가 이해하기 쉬운 정보를 제공하는 개인 개발 앱입니다.</p><p>분석 결과는 일상적인 참고 정보로 활용해 주세요.</p>`,
        },
        contact: {
          title: 'TrueSkin 문의',
          html: `<h1>문의하기</h1><p>질문이나 문의가 있으면 아래 이메일 주소로 연락해 주세요.</p><p>이메일:<br><strong><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></strong></p>`,
        },
        deletion: {
          title: '계정 삭제 - TrueSkin',
          html: `<h1>계정 삭제</h1><section class="card"><p>이 페이지에서는 TrueSkin 계정을 삭제하는 방법을 안내합니다.</p>
            <h2>앱에서 삭제하기(권장)</h2><ol><li>앱에 로그인합니다.</li><li><strong>설정</strong>에서 <strong>계정 삭제</strong>를 선택합니다.</li><li>확인 화면의 안내에 따라 삭제를 완료합니다.</li></ol><p class="muted">삭제 후에는 복구할 수 없습니다. 앱이 관리하는 사진, 결과 등의 기기 내 데이터가 기기에서 삭제됩니다.</p>
            <h2>삭제되는 데이터</h2><ul><li>인증 정보(Cognito 사용자 레코드)</li><li>구매 상태 등 최소한의 사용자 정보(DynamoDB 레코드)</li><li>앱이 관리하는 기기 내 사진, 분석 결과 등의 데이터</li></ul><p class="muted">앱은 서버(S3 등)에 사진이나 분석 결과를 저장하지 않습니다.</p>
            <h2>앱에 접속할 수 없는 경우</h2><p>기기를 분실하는 등 앱에서 삭제할 수 없는 경우 아래 주소로 문의해 주세요.</p><p>이메일: <a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a><br>제목 예시: TrueSkin 계정 삭제 요청<br>본문에 가입 시 이메일 주소 또는 로그인 방법을 적어 주세요.</p>
            <h2>삭제 완료까지 걸리는 시간</h2><p>삭제 요청 접수 후 일반적으로 <strong>30일 이내</strong>에 삭제를 완료하며, 대부분 더 빨리 처리됩니다.</p><h2>보관될 수 있는 정보</h2><p class="muted">법령 준수 또는 부정 이용 방지를 위해 최소한의 로그 정보를 일정 기간 보관할 수 있습니다.</p></section><p class="muted">최종 업데이트: 2026년 1월 12일</p>`,
        },
      },
    },
    zh: {
      nav: {
        privacy: '隐私政策',
        terms: '服务条款',
        about: '关于 TrueSkin',
        contact: '联系我们',
        deletion: '删除账户',
        language: '语言',
      },
      pages: {
        privacy: {
          title: 'TrueSkin 隐私政策',
          html: `
            <h1>TrueSkin 隐私政策</h1><p>本隐私政策说明 TrueSkin 应用（以下简称“本服务”）可能收集的信息及其使用方式。本服务尊重用户的隐私。</p>
            <h2>可能收集的信息</h2><p>为提供服务所需，本服务可能收集以下信息：</p><ul><li>电子邮箱地址以及与 Apple ID 或 Google 账号相关的身份验证信息</li><li>通过相机拍摄或由用户选择的图像</li><li>AI 分析结果</li><li>设备信息、应用使用情况、错误信息等日志</li><li>提供服务所需的信息，例如应用内购买的有效状态</li></ul>
            <h2>相机与照片</h2><p>只有在用户主动操作以使用图像分析功能时，本服务才会使用相机或照片图库。应用不会在后台拍摄。</p>
            <h2>人脸照片及人脸数据</h2><p>本服务会使用用户拍摄或选择的人脸照片，通过 AI 分析皮肤状况。</p><p>本服务处理的人脸数据是用户自愿拍摄或选择的普通人脸照片。</p><p>本服务不会收集 Face ID 数据、人脸识别模板、人脸特征向量、面部几何数据或用于识别个人的生物识别信息。</p><p>人脸照片仅用于分析皮肤状况、估算皮肤年龄和状态、显示分析结果，以及帮助用户记录和查看自己的皮肤状况。</p><p>人脸照片不会用于身份验证、人脸识别、个人身份识别、广告、跟踪或用户画像。</p>
            <h2>图像数据及分析结果</h2><p>拍摄或选择的图像用于图像分析及显示结果。</p><p>本服务不会将用户的人脸照片存储在本服务的服务器上。</p><p>人脸照片和 AI 分析结果作为由应用管理的设备内数据保存。</p><p>图像分析完成后，人脸照片不会保留在本服务的服务器上。</p>
            <h2>信息使用目的</h2><ul><li>登录与身份验证</li><li>AI 皮肤状况分析</li><li>估算皮肤年龄和状态</li><li>显示分析结果</li><li>提供历史记录功能，方便用户记录和查看自己的皮肤状况</li><li>确认应用内购买状态</li><li>提供、维护和改进本服务</li><li>防止滥用、处理故障及回复咨询</li></ul>
            <h2>使用外部服务</h2><p>本服务可能使用 Apple、Google、Google Gemini API、Amazon Web Services（AWS）等外部服务，以提供登录认证、用户管理、购买状态确认和图像分析等功能。</p><p>用户拍摄或选择的人脸照片会发送至 Google Gemini API，以生成 AI 分析结果。</p><p>发送至 Google Gemini API 的图像仅用于生成皮肤分析结果。</p><p>人脸照片不会提供给第三方用于广告、跟踪、个人身份识别或人脸识别。</p><p>iOS 应用内购买由 Apple App Store 处理。服务运营者不会收集或存储信用卡号等支付信息。</p>
            <h2>向第三方提供信息</h2><p>除法律法规要求的情况外，本服务不会向第三方提供用户的个人信息。</p><p>本服务不会出售、出租人脸照片，也不会将其用于广告分享。</p>
            <h2>数据保存期限</h2><p>本服务不会将人脸照片保留在本服务的服务器上。</p><p>人脸照片和 AI 分析结果保存在设备上，直到用户在应用或设备中将其删除。</p><p>账号信息、购买状态和日志等提供服务所需的信息，可能会在提供服务、处理故障、防止滥用和回复咨询所需的期间内保存。</p>
            <h2>删除账户</h2><p>用户可通过应用内的设置或联系我们申请删除账户。详情请查看<a href="./deletion.html">账户删除说明</a>。</p>
            <h2>免责声明</h2><p>分析结果仅供日常美容及护肤参考，不构成医疗服务、诊断、治疗、疾病检测或专业建议。</p>
            <h2>联系我们</h2><p>如对本政策有疑问，请通过以下邮箱联系我们：</p><p><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></p>
            <h2>运营者</h2><p>运营者：西本隆司</p><p>制定日期：2025年12月21日<br>最后更新：2026年5月18日</p>`,
        },
        terms: {
          title: 'TrueSkin 服务条款',
          html: `
            <h1>TrueSkin 服务条款</h1><p>本服务条款（以下简称“本条款”）规定了 TrueSkin（以下简称“本服务”）的使用条件。</p><p>使用本服务即视为您同意本条款。</p>
            <h2>第1条（关于本服务）</h2><p>本服务会分析用户拍摄或选择的图像，并提供有关皮肤状况的信息。</p><p>分析结果仅作为日常护肤等用途的参考信息，不用于医疗行为、诊断或治疗。</p><p>如果您对皮肤状况有疑虑，请咨询医疗机构或专业人士。</p>
            <h2>第2条（图像的使用）</h2><p>用户拍摄或选择的图像将用于图像分析及显示分析结果。</p><p>图像不会用于分析目的以外的用途。</p><p>图像及其他信息的处理遵循另行制定的隐私政策。</p>
            <h2>第3条（账户）</h2><p>使用本服务的部分功能时，可能需要注册账户。</p><p>用户应提供准确的注册信息，并在必要时保持信息为最新状态。</p><p>用户有责任妥善管理自己的账户及登录信息。</p><p>如怀疑第三方未经授权使用，请及时联系运营者。</p>
            <h2>第4条（付费服务）</h2><p>本服务的部分功能可能以付费方式提供。</p><p>付费服务的价格、使用期限、服务内容及其他条件将在购买页面等处显示。</p><p>用户应在购买前确认所显示的内容。</p><p>付款可能通过 Apple App Store、Google Play 或其他支付服务提供商提供的方式进行。</p>
            <h2>第5条（取消与退款）</h2><p>如提供定期收费服务，用户应通过相应应用商店或指定方式办理取消手续。</p><p>仅删除应用程序可能不会停止定期收费。</p><p>退款遵循购买时所使用的 Apple App Store、Google Play 或其他支付服务提供商的条件。</p><p>除法律要求退款的情况外，运营者不另行保证退款。</p>
            <h2>第6条（禁止事项）</h2><p>用户使用本服务时，不得从事以下行为：</p><ul><li>违反法律法规或公序良俗的行为</li><li>不正当地使用本服务</li><li>冒充他人</li><li>侵害他人的权利或利益</li><li>妨碍本服务的运营</li><li>未经授权访问本服务或其系统</li><li>不正当地分析、修改或使用本服务的程序、分析方法及其他机制</li><li>运营者认为不适当的其他行为</li></ul>
            <h2>第7条（知识产权）</h2><p>本服务所含程序、设计、文字、图像、标志、分析方法及其他内容的著作权、商标权和其他知识产权，归运营者或拥有合法权利的第三方所有。</p><p>除法律允许的情形外，未经运营者许可，用户不得复制、转载、修改、分发或用于商业用途。</p><p>用户自行提供给本服务的图像等内容，其权利不会转让给运营者。</p>
            <h2>第8条（免责声明）</h2><p>本服务的分析结果仅作为参考信息提供。</p><p>运营者不保证结果的准确性、完整性、有用性或对特定目的的适用性。</p><p>结果可能因拍摄环境、光线、相机性能、面部角度、图像质量等条件而有所不同。</p><p>除适用法律不允许免除责任的情形外，运营者不对因使用本服务或用户依据分析结果作出的判断或行为而产生的损害承担责任。</p>
            <h2>第9条（服务内容的变更与停止）</h2><p>运营者可能因系统维护、故障、服务内容变更或其他原因，变更、中断或终止本服务的全部或部分内容。</p>
            <h2>第10条（停止使用与删除账户）</h2><p>如用户违反本条款，或运营者认为继续提供服务不适当，运营者可不事先通知而停止该用户使用本服务或删除其账户。</p>
            <h2>第11条（本条款的变更）</h2><p>运营者可根据法律法规在必要时变更本条款。</p><p>变更后的条款将通过发布在本服务或相关网站上，或以其他适当方式通知。</p>
            <h2>第12条（准据法与管辖）</h2><p>本条款以日本法律为准据法。</p><p>有关本服务的争议将依照日本国内的法律法规解决。</p>
            <h2>第13条（咨询）</h2><p>有关本服务的咨询，请通过本服务或相关网站所列明的方式提出。</p><p>制定日期：2025年12月21日<br>最后修订日期：2026年10月6日</p>`,
        },
        about: {
          title: '关于 TrueSkin',
          html: `<h1>关于 TrueSkin</h1><p>TrueSkin 是一款个人开发的应用，通过分析相机拍摄的图像，为用户提供易于理解的信息。</p><p>请将分析结果作为日常参考信息使用。</p>`,
        },
        contact: {
          title: '联系 TrueSkin',
          html: `<h1>联系我们</h1><p>如有问题或需要咨询，请通过以下电子邮箱联系我们。</p><p>电子邮箱：<br><strong><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></strong></p>`,
        },
        deletion: {
          title: '删除 TrueSkin 账户',
          html: `<h1>删除账户</h1><section class="card"><p>本页面说明如何删除 TrueSkin 账户。</p>
            <h2>在应用内删除（推荐）</h2><ol><li>登录应用。</li><li>进入<strong>设置</strong>并选择<strong>删除账户</strong>。</li><li>按照确认页面的说明完成删除。</li></ol><p class="muted">删除后无法恢复。应用管理的照片、分析结果等设备本地数据将从设备中删除。</p>
            <h2>将删除的数据</h2><ul><li>身份验证信息（Cognito 中的用户记录）</li><li>购买状态等最少限度的用户信息（DynamoDB 中的记录）</li><li>应用管理的设备本地照片、分析结果等数据</li></ul><p class="muted">本应用不会在服务器（包括 S3）上保存照片或分析结果。</p>
            <h2>无法访问应用时</h2><p>如果因设备丢失等原因无法在应用中删除账户，请通过以下邮箱联系我们。</p><p>电子邮箱：<a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a><br>建议主题：TrueSkin 账户删除申请<br>请在邮件正文中注明注册时使用的邮箱地址或登录方式。</p>
            <h2>删除完成时间</h2><p>收到申请后，原则上会在<strong>30 天内</strong>完成删除（通常会更快）。</p><h2>可能保留的信息</h2><p class="muted">为遵守法律法规或防止滥用，最少量的日志信息可能会保留一段时间。</p></section><p class="muted">最后更新：2026年1月12日</p>`,
        },
      },
    },
    'zh-TW': {
      nav: {
        privacy: '隱私權政策',
        terms: '服務條款',
        about: '關於 TrueSkin',
        contact: '聯絡我們',
        deletion: '刪除帳號',
        language: '語言',
      },
      pages: {
        privacy: {
          title: 'TrueSkin 隱私權政策',
          html: `
            <h1>TrueSkin 隱私權政策</h1><p>本隱私權政策說明 TrueSkin 應用程式（以下稱「本服務」）可能蒐集的資訊及其使用方式。本服務尊重使用者的隱私。</p>
            <h2>可能蒐集的資訊</h2><p>為提供服務所需，本服務可能蒐集以下資訊：</p><ul><li>電子郵件地址，以及與 Apple ID 或 Google 帳號相關的驗證資訊</li><li>透過相機拍攝或由使用者選取的影像</li><li>AI 分析結果</li><li>裝置資訊、應用程式使用情況、錯誤資訊等記錄</li><li>提供服務所需的資訊，例如 App 內購買的有效狀態</li></ul>
            <h2>相機與照片</h2><p>只有在使用者主動操作以使用影像分析功能時，本服務才會使用相機或照片圖庫。應用程式不會在背景拍攝。</p>
            <h2>臉部照片及臉部資料</h2><p>本服務會使用使用者拍攝或選取的臉部照片，以 AI 分析肌膚狀況。</p><p>本服務處理的臉部資料是使用者自願拍攝或選取的一般臉部照片。</p><p>本服務不會蒐集 Face ID 資料、臉部辨識範本、臉部特徵向量、臉部幾何資料，或用於識別個人的生物辨識資訊。</p><p>臉部照片僅用於分析肌膚狀況、估算肌膚年齡及狀態、顯示分析結果，以及讓使用者記錄和查看自己的肌膚狀況。</p><p>臉部照片不會用於身分驗證、臉部辨識、個人識別、廣告、追蹤或使用者側寫。</p>
            <h2>影像資料及分析結果</h2><p>拍攝或選取的影像用於影像分析及顯示結果。</p><p>本服務不會將使用者的臉部照片儲存在本服務的伺服器上。</p><p>臉部照片與 AI 分析結果會以由應用程式管理的裝置內資料形式儲存。</p><p>影像分析完成後，臉部照片不會保留在本服務的伺服器上。</p>
            <h2>資訊使用目的</h2><ul><li>登入與驗證</li><li>AI 肌膚狀況分析</li><li>估算肌膚年齡及狀態</li><li>顯示分析結果</li><li>提供歷史記錄功能，讓使用者記錄和查看自己的肌膚狀況</li><li>確認 App 內購買狀態</li><li>提供、維護及改善本服務</li><li>防止不當使用、處理故障及回覆詢問</li></ul>
            <h2>使用外部服務</h2><p>本服務可能使用 Apple、Google、Google Gemini API、Amazon Web Services（AWS）等外部服務，以提供登入驗證、使用者管理、購買狀態確認及影像分析等功能。</p><p>使用者拍攝或選取的臉部照片會傳送至 Google Gemini API，以產生 AI 分析結果。</p><p>傳送至 Google Gemini API 的影像僅用於產生肌膚分析結果。</p><p>臉部照片不會提供給第三方用於廣告、追蹤、個人識別或臉部辨識。</p><p>iOS App 內購買的付款由 Apple App Store 處理。服務營運者不會蒐集或儲存信用卡號等付款資訊。</p>
            <h2>提供給第三方</h2><p>除法律要求的情況外，本服務不會向第三方提供使用者的個人資訊。</p><p>本服務不會出售、出租臉部照片，亦不會為廣告目的分享照片。</p>
            <h2>資料保存期間</h2><p>本服務不會將臉部照片保留在本服務的伺服器上。</p><p>臉部照片與 AI 分析結果儲存在裝置上，直到使用者在應用程式或裝置中刪除為止。</p><p>帳號資訊、購買狀態及記錄等提供服務所需的資訊，可能會在提供服務、處理故障、防止不當使用及回覆詢問所需期間內保存。</p>
            <h2>刪除帳號</h2><p>使用者可透過應用程式內的設定或聯絡我們來申請刪除帳號。詳情請參閱<a href="./deletion.html">帳號刪除說明</a>。</p>
            <h2>免責聲明</h2><p>分析結果僅供日常美容及肌膚保養參考，不構成醫療服務、診斷、治療、疾病偵測或專業建議。</p>
            <h2>聯絡我們</h2><p>如對本政策有任何疑問，請透過以下電子郵件聯絡我們：</p><p><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></p>
            <h2>營運者</h2><p>營運者：西本隆司</p><p>制定日期：2025年12月21日<br>最後更新：2026年5月18日</p>`,
        },
        terms: {
          title: 'TrueSkin 服務條款',
          html: `
            <h1>TrueSkin 服務條款</h1><p>本服務條款（以下稱「本條款」）規定 TrueSkin（以下稱「本服務」）的使用條件。</p><p>使用本服務即視為您已同意本條款。</p>
            <h2>第1條（關於本服務）</h2><p>本服務會分析使用者拍攝或選取的影像，並提供肌膚狀況相關資訊。</p><p>分析結果僅作為日常肌膚保養等用途的參考資訊，不作為醫療行為、診斷或治療之用。</p><p>若您對肌膚狀況有疑慮，請洽詢醫療機構或專業人士。</p>
            <h2>第2條（影像的使用）</h2><p>使用者拍攝或選取的影像，會用於影像分析及顯示分析結果。</p><p>影像不會用於分析目的以外的用途。</p><p>影像及其他資訊的處理依另行制定的隱私權政策辦理。</p>
            <h2>第3條（帳號）</h2><p>使用本服務的部分功能時，可能需要註冊帳號。</p><p>使用者應提供正確的註冊資訊，並於必要時維持資訊為最新狀態。</p><p>使用者有責任妥善管理自己的帳號及登入資訊。</p><p>若懷疑有第三人未經授權使用，請儘速聯絡營運者。</p>
            <h2>第4條（付費服務）</h2><p>本服務的部分功能可能以付費方式提供。</p><p>付費服務的價格、使用期間、提供內容及其他條件，會於購買畫面等處顯示。</p><p>使用者應於購買前確認所顯示的內容。</p><p>付款可能透過 Apple App Store、Google Play 或其他付款服務業者提供的方式進行。</p>
            <h2>第5條（取消與退款）</h2><p>若提供定期收費服務，使用者應透過各應用程式商店或指定方式辦理取消手續。</p><p>僅刪除應用程式可能不會停止定期收費。</p><p>退款依購買時使用的 Apple App Store、Google Play 或其他付款服務業者所定條件辦理。</p><p>除法律規定必須退款的情況外，營運者不另行保證退款。</p>
            <h2>第6條（禁止事項）</h2><p>使用者使用本服務時，不得從事以下行為：</p><ul><li>違反法令或公序良俗的行為</li><li>不當使用本服務</li><li>冒充他人</li><li>侵害他人權利或利益</li><li>妨礙本服務營運</li><li>未經授權存取本服務或其系統</li><li>不當分析、修改或使用本服務的程式、分析方法及其他機制</li><li>營運者認定為不適當的其他行為</li></ul>
            <h2>第7條（智慧財產權）</h2><p>本服務所含程式、設計、文字、影像、標誌、分析方法及其他內容的著作權、商標權及其他智慧財產權，均屬營運者或合法權利人所有。</p><p>除法律允許的情況外，未經營運者許可，使用者不得複製、轉載、修改、散布或作商業用途。</p><p>使用者提供給本服務的影像等資料，其權利不會移轉給營運者。</p>
            <h2>第8條（免責事項）</h2><p>本服務的分析結果僅作為參考資訊提供。</p><p>營運者不保證結果的正確性、完整性、有用性或符合特定目的。</p><p>結果可能因拍攝環境、光線、相機性能、臉部角度、影像品質等條件而有所不同。</p><p>除適用法律不允許免除責任的情況外，營運者不對因使用本服務或使用者依據分析結果所作判斷或行為而產生的損害負責。</p>
            <h2>第9條（服務內容的變更與停止）</h2><p>營運者可能因系統維護、故障、服務內容變更或其他原因，變更、中斷或終止本服務的全部或部分內容。</p>
            <h2>第10條（停止使用與刪除帳號）</h2><p>使用者違反本條款，或營運者認為繼續提供服務並不適當時，營運者可不事先通知而停止該使用者使用本服務或刪除其帳號。</p>
            <h2>第11條（本條款的變更）</h2><p>營運者得依照法令於必要時變更本條款。</p><p>變更後的條款將刊載於本服務或相關網站，或以其他適當方式通知。</p>
            <h2>第12條（準據法與管轄）</h2><p>本條款以日本法律為準據法。</p><p>有關本服務的爭議，依日本國內法令解決。</p>
            <h2>第13條（聯絡方式）</h2><p>有關本服務的詢問，請透過本服務或相關網站所載明的方式提出。</p><p>制定日期：2025年12月21日<br>最後修訂日期：2026年10月6日</p>`,
        },
        about: {
          title: '關於 TrueSkin',
          html: `<h1>關於 TrueSkin</h1><p>TrueSkin 是一款個人開發的應用程式，透過分析相機影像，為使用者提供容易理解的資訊。</p><p>請將分析結果作為日常參考資訊使用。</p>`,
        },
        contact: {
          title: '聯絡 TrueSkin',
          html: `<h1>聯絡我們</h1><p>如有問題或需要詢問，請透過以下電子郵件聯絡我們。</p><p>電子郵件：<br><strong><a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a></strong></p>`,
        },
        deletion: {
          title: '刪除 TrueSkin 帳號',
          html: `<h1>刪除帳號</h1><section class="card"><p>本頁說明如何刪除 TrueSkin 帳號。</p>
            <h2>在應用程式內刪除（建議）</h2><ol><li>登入應用程式。</li><li>開啟<strong>設定</strong>並選取<strong>刪除帳號</strong>。</li><li>依照確認畫面的指示完成刪除。</li></ol><p class="muted">刪除後無法復原。由應用程式管理的照片、結果等裝置本機資料將從裝置中刪除。</p>
            <h2>將刪除的資料</h2><ul><li>驗證資訊（Cognito 中的使用者記錄）</li><li>購買狀態等最低限度的使用者資訊（DynamoDB 中的記錄）</li><li>由應用程式管理的裝置本機照片、分析結果等資料</li></ul><p class="muted">本應用程式不會在伺服器（包括 S3）上儲存照片或分析結果。</p>
            <h2>無法存取應用程式時</h2><p>若因裝置遺失等原因而無法在應用程式內刪除，請透過以下地址聯絡我們。</p><p>電子郵件：<a href="mailto:nishimotoworks2025@gmail.com">nishimotoworks2025@gmail.com</a><br>建議主旨：TrueSkin 帳號刪除申請<br>請在郵件內文註明註冊時使用的電子郵件地址或登入方式。</p>
            <h2>完成刪除所需時間</h2><p>收到申請後，原則上會在<strong>30 天內</strong>完成刪除（通常會更快）。</p><h2>可能保留的資訊</h2><p class="muted">為遵守法律或防止不當使用，最低限度的記錄資訊可能會保留一段時間。</p></section><p class="muted">最後更新：2026年1月12日</p>`,
        },
      },
    },
  };

  const localeAliases = {
    'zh-Hant': 'zh-TW',
    'zh-TW': 'zh-TW',
    'zh-HK': 'zh-TW',
    'zh-Hans': 'zh',
    'zh-CN': 'zh',
    'zh-SG': 'zh',
  };
  const normalizeLocale = (candidate) => {
    const normalized = candidate.replace(/_/g, '-');
    if (/^zh-(hant|tw|hk|mo)(-|$)/i.test(normalized)) return 'zh-TW';
    if (/^zh-(hans|cn|sg)(-|$)/i.test(normalized)) return 'zh';
    return localeAliases[normalized] || normalized.split('-')[0].toLowerCase();
  };
  const requested = new URLSearchParams(window.location.search).get('lang');
  const browserLanguages = navigator.languages && navigator.languages.length
    ? Array.from(navigator.languages)
    : [navigator.language || 'ja'];
  const candidates = requested ? [requested] : browserLanguages;
  let locale = 'ja';
  for (const candidate of candidates) {
    const normalized = normalizeLocale(candidate);
    if (normalized === 'ja' || languages[normalized]) {
      locale = normalized;
      break;
    }
  }

  document.documentElement.lang = locale === 'zh-TW' ? 'zh-Hant' : locale;
  const pageKey = document.body.dataset.legalPage;
  const currentPage = copy[locale]?.pages[pageKey];
  const labels = copy[locale]?.nav || {
    privacy: 'プライバシーポリシー',
    terms: '利用規約',
    about: 'このアプリについて',
    contact: 'お問い合わせ',
    deletion: 'アカウント削除',
    language: '言語',
  };

  const style = document.createElement('style');
  style.textContent = `
    body { font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif; line-height: 1.7; margin: 0; color: #222; }
    .legal-header { max-width: 900px; margin: 20px auto 0; padding: 0 20px; }
    .legal-nav { display: flex; flex-wrap: wrap; gap: 6px 12px; padding-bottom: 12px; border-bottom: 1px solid #ddd; }
    .legal-nav a { color: #71334b; }
    .legal-language { display: flex; justify-content: flex-end; gap: 8px; align-items: center; margin: 8px 0; font-size: 14px; }
    .legal-language select { font: inherit; padding: 5px 8px; }
    .legal-main { max-width: 900px; margin: 24px auto; padding: 0 20px 40px; }
    .legal-main h1 { font-size: 1.8rem; line-height: 1.35; }
    .legal-main h2 { margin-top: 1.8em; font-size: 1.2rem; }
    .legal-main p, .legal-main li { line-height: 1.75; }
    .legal-main .card { border: 1px solid #ddd; border-radius: 10px; padding: 16px; margin: 16px 0; }
    .legal-main .muted { color: #555; }
    @media (max-width: 600px) { .legal-header, .legal-main { padding-left: 16px; padding-right: 16px; } }
  `;
  document.head.appendChild(style);

  const header = document.createElement('header');
  header.className = 'legal-header';
  const nav = document.createElement('nav');
  nav.className = 'legal-nav';
  nav.setAttribute('aria-label', locale === 'ja' ? 'ページ' : 'Pages');
  for (const key of Object.keys(routes)) {
    const link = document.createElement('a');
    const target = new URL(routes[key], window.location.href);
    target.searchParams.set('lang', locale);
    link.href = target.href;
    link.textContent = labels[key];
    nav.appendChild(link);
  }
  const languageRow = document.createElement('label');
  languageRow.className = 'legal-language';
  languageRow.textContent = `${labels.language}: `;
  const select = document.createElement('select');
  select.setAttribute('aria-label', labels.language);
  for (const [code, name] of Object.entries(languages)) {
    const option = document.createElement('option');
    option.value = code;
    option.textContent = name;
    option.selected = code === locale;
    select.appendChild(option);
  }
  select.addEventListener('change', () => {
    const target = new URL(window.location.href);
    target.searchParams.set('lang', select.value);
    window.location.assign(target.href);
  });
  languageRow.appendChild(select);
  header.appendChild(nav);
  header.appendChild(languageRow);

  if (locale === 'ja') {
    document.body.insertBefore(header, document.body.firstChild);
    const oldNav = document.querySelector('body > nav:not(.legal-nav)');
    if (oldNav) oldNav.parentNode.removeChild(oldNav);
  } else if (currentPage) {
    document.title = currentPage.title;
    document.body.innerHTML = '';
    document.body.appendChild(header);
    const main = document.createElement('main');
    main.className = 'legal-main';
    main.innerHTML = currentPage.html;
    document.body.appendChild(main);
  }

  for (const link of document.querySelectorAll('a[href]')) {
    const target = new URL(link.href, window.location.href);
    if (target.origin === window.location.origin && target.pathname.endsWith('.html')) {
      target.searchParams.set('lang', locale);
      link.href = target.href;
    }
  }
})();
