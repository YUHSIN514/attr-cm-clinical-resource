---
title: AI 輔助篩檢
description: ECG-AI 與 Echo-AI 心臟類澱粉沉積症輔助篩檢、研究證據及使用範圍。
---

本頁整理從心電圖與心臟超音波辨識疑似心臟類澱粉沉積症（CA）的 AI 工具。重點是協助發現需要進一步評估的病人。

## Mayo Clinic × Anumana｜ECG-AI Cardiac Amyloidosis

以標準 12-lead ECG 進行 cardiac amyloidosis AI screening；Anumana 的 ECG-AI Cardiac Amyloidosis 12-Lead Algorithm 已於 2026 年取得 FDA 510(k) clearance（K253801）。

- <a href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfpmn/pmn.cfm?ID=K253801" target="_blank" rel="noopener noreferrer">FDA｜510(k) K253801 ↗</a>
- <a href="https://pubmed.ncbi.nlm.nih.gov/34218880/" target="_blank" rel="noopener noreferrer">2021｜Artificial Intelligence-Enhanced Electrocardiogram for the Early Detection of Cardiac Amyloidosis｜PubMed ↗</a>
- <a href="https://pubmed.ncbi.nlm.nih.gov/38638999/" target="_blank" rel="noopener noreferrer">2024｜Postdevelopment Performance and Validation｜PubMed ↗</a>


## AI Echo｜Mayo Clinic × Ultromics

**EchoGo Amyloidosis** 是 Mayo Clinic 與 Ultromics 合作開發的 Echo-AI 工具，從單一心尖四腔室（A4C）動態影像辨識疑似心臟類澱粉沉積症。它與 Mayo × Anumana 的 ECG-AI 是不同產品，也與 Us2.ai 分屬不同平台。

### 2024｜FDA 510(k) clearance

- **產品：** EchoGo Amyloidosis 1.0；**編號：** K240860；**日期：** 2024-11-15。
- FDA 使用範圍為 **65 歲以上（含 65 歲）、患有心衰竭且接受心臟超音波評估的成人**。
- 提供醫師轉介確認性檢查的提示；不能單靠分析結果決定病人處置。
- **EchoGo Heart Failure** 與 **EchoGo Amyloidosis** 是不同功能；前者的 HFpEF 偵測結果不能直接視為 CA 篩檢結果。

### 2025｜單一 Echo 影像的多中心驗證

**期刊：** Slivnick JA, Hawkes W, et al. *European Heart Journal*. 2025;46:4090–4101  
*Cardiac amyloidosis detection from a single echocardiographic video clip: a novel artificial intelligence-based screening tool*

- 以 2,612 人資料訓練，外部驗證涵蓋 18 個中心、2,719 人（597 名 CA、2,122 名對照）。
- **排除 13% 不確定判定後**，外部驗證 AUROC 0.93、敏感度 85%、特異度 93%；這些數字不能當作所有檢查皆能得到明確結果的表現。
- 在已轉介 PYP 檢查的亞組，AUROC 0.86、敏感度 77%、特異度 86%，顯示效能會隨使用族群改變。
- 可辨識包含 AL、ATTRwt、ATTRv 在內的 CA，但這不等於能替病人完成分型。研究驗證族群也不應與 FDA 產品使用範圍混為一談。

- <a href="https://www.accessdata.fda.gov/cdrh_docs/pdf24/K240860.pdf" target="_blank" rel="noopener noreferrer">FDA｜EchoGo Amyloidosis 使用範圍（K240860）↗</a>
- <a href="https://doi.org/10.1093/eurheartj/ehaf387" target="_blank" rel="noopener noreferrer">European Heart Journal｜原始研究 ↗</a>
- <a href="https://newsnetwork.mayoclinic.org/discussion/ai-enhanced-echocardiography-improves-early-detection-of-amyloid-buildup-in-the-heart/" target="_blank" rel="noopener noreferrer">Mayo Clinic｜合作與研究介紹 ↗</a>

## Us2.ai｜Echo-AI 心臟類澱粉沉積症輔助篩檢

Us2.ai 是心臟超音波自動分析平台；其中 **Us2.ca** 是針對心臟類澱粉沉積症的輔助偵測功能。相較前面的 ECG-AI，這一類工具從既有的 **Echo 影像** 找出疑似線索。

### 如何運作

- **參數分析：** 平台可自動量測壁厚、GLS、舒張功能等指標，提供醫師可檢視的量測結果。
- **影像模式辨識：** Us2.ca 以深度學習分析心尖四腔室（A4C）動態影像，提示可能需要進一步評估 CA 的病人。參數分析與影像模式辨識是不同方法，不宜將各自研究表現混為一談。

### 2025｜FDA 510(k) clearance

- **產品：** Us2.ca；**編號：** K250151；**日期：** 2025-06-20。
- FDA 的 Indications for Use 頁面限定用於左心室壁增厚的成人（IVSd 或 LVPWd >12 mm；詳見原始文件）。這是產品使用範圍，並不是排除 CA 的通用壁厚門檻。
- 用途是協助專業人員判讀，**不提供獨立確診，也不能以結果排除後續評估的必要性**。
- **不能區分 AL、野生型 ATTR 與遺傳型 ATTR。**
- FDA 文件中的外部驗證使用 GE 與 Philips 影像；其他機型的表現不能直接視為相同。

- <a href="https://www.accessdata.fda.gov/cdrh_docs/pdf25/K250151.pdf" target="_blank" rel="noopener noreferrer">FDA｜Us2.ca 使用範圍與驗證資料（K250151）↗</a>

### 2026｜Echo-AI 原始研究

**期刊：** Ioannou A, et al. *Circulation: Cardiovascular Imaging*. 2026;19:e018991  
*Diagnosis of Cardiac Amyloidosis on Echocardiography Using Artificial Intelligence*

- 研究比較 AI 自動量測所建立的多參數評分，以及直接分析 Echo 動態影像的深度學習方法。
- 共 5,776 人，包含 CA 與對照族群；訓練資料來自英國 National Amyloidosis Centre 與台灣 MacKay Memorial Hospital，外部測試來自美國 Duke 與日本 National Cerebral and Cardiovascular Center。
- 這類驗證回答「能否辨識 CA 與相似表型」，不等於已證明一般門診篩檢能改善病人預後，也不代表可以直接辨識 ATTR 分型。

- <a href="https://pubmed.ncbi.nlm.nih.gov/41674454/" target="_blank" rel="noopener noreferrer">PubMed｜原始研究 ↗</a>
- <a href="https://doi.org/10.1161/CIRCIMAGING.125.018991" target="_blank" rel="noopener noreferrer">期刊原文 ↗</a>
- <a href="https://us2.ai/features/cardiac-amyloidosis/" target="_blank" rel="noopener noreferrer">Us2.ai｜功能說明（廠商來源）↗</a>

**閱讀重點：** AI 的角色是提醒醫師進一步評估。疑似 CA 與確診 ATTR-CM 是不同階段；FDA clearance 也不代表台灣已核准同一用途。
