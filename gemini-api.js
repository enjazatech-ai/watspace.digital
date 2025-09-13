<!DOCTYPE html>
<html>
<head>
    <title>WATSpace.Digital</title>
</head>
<body>

    <h1>موقع الذكاء الاصطناعي الخاص بي</h1>
    <p>تفضل واطرح سؤالك على Gemini</p>

    <textarea id="promptInput" placeholder="اكتب سؤالك هنا..."></textarea>
    <button id="generateBtn">أرسل</button>

    <div id="responseArea">
        </div>

    <script src="gemini-api.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@google/generative-ai"></script>

  // *** تحذير: هذا الكود يعرض مفتاحك. لا تستخدمه في مشروع فعلي! ***
const API_KEY = AIzaSyDxw08v_2YTuYV8LrJNCCUYLabuiQiITNU; // استبدل بـ مفتاحك الحقيقي

// جلب العناصر من صفحة الويب
const promptInput = document.getElementById('promptInput');
const generateBtn = document.getElementById('generateBtn');
const responseArea = document.getElementById('responseArea');

// تهيئة نموذج Gemini AI
const { GoogleGenerativeAI } = require('@google/generative-ai');
const genAI = new GoogleGenerativeAI(API_KEY);
const model = genAI.getGenerativeModel({ model: "gemini-pro"});

// إضافة حدث عند الضغط على الزر
generateBtn.addEventListener('click', async () => {
    const prompt = promptInput.value;

    if (!prompt) {
        responseArea.innerText = "الرجاء إدخال سؤال.";
        return;
    }

    try {
        responseArea.innerText = "جاري التوليد...";
        
        // استدعاء الـ API بسؤال المستخدم
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        responseArea.innerText = text;
    } catch (error) {
        console.error('Error:', error);
        responseArea.innerText = "عذراً، حدث خطأ. الرجاء المحاولة مرة أخرى.";
    }
});

</body>
</html>
