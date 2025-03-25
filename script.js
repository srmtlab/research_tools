import { tool1Data, handleFormSubmission } from './tool1.js';

const tabsData = [
    tool1Data,
    { title: "ツール2", description: "ツール2の説明です。", class:"tool2_content", content: "これはタブ2の内容です。" },
    { title: "ツール3", description: "ツール3の説明です。", class:"tool3_content", content: "これはタブ3の内容です。" },
    { title: "ツール4", description: "ツール4の説明です。", class:"tool4_content", content: "これはタブ4の内容です。" },
    { title: "ツール5", description: "ツール5の説明です。", class:"tool5_content", content: "これはタブ5の内容です。" }
];

// タブを動的に生成する
function generateTabs() {
    const tabTitles = document.getElementById("tabTitles");
    const tabContent = document.getElementById("tabContent");

    tabsData.forEach((tab, index) => {
        // タイトル部分
        const li = document.createElement("li");
        li.textContent = tab.title;
        li.onclick = () => showTab(index);
        tabTitles.appendChild(li);

        // コンテンツ部分
        const div = document.createElement("div");
        div.classList.add("tab-item");
        div.innerHTML = `<h2>${tab.title}</h2><div class=${tab.class}>${tab.content}</div>`;
        tabContent.appendChild(div);
    });

    // 初期タブを表示
    showTab(0);
}

// タブの切り替え
function showTab(index) {
    const tabs = document.querySelectorAll('.tab-item');
    const tabTitles = document.querySelectorAll('.tab-titles li');
    
    tabs.forEach((tab, i) => {
        tab.classList.remove('active');
        tabTitles[i].classList.remove('active');
    });

    tabs[index].classList.add('active');
    tabTitles[index].classList.add('active');
    
    // 左側の説明エリアを更新
    document.getElementById('tabDescription').textContent = tabsData[index].description;
}

// ページロード時にタブを生成
window.onload = generateTabs;

