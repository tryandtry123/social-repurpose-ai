import { SAMPLE_VIDEOS, generateDynamicAssetPack } from './sampleData.js';

// Application State
const STATE = {
  credits: parseInt(localStorage.getItem('tubetoviral_credits') ?? '1', 10),
  isUnlimited: localStorage.getItem('tubetoviral_unlimited') === 'true',
  currentPack: null,
  isPreviewMode: false, // true = 30% teaser preview, false = full unlock
  activeTab: 'tab-x-thread',
  settings: JSON.parse(localStorage.getItem('tubetoviral_settings') || '{"provider":"builtin","apiKey":"","language":"zh"}')
};

// DOM Elements
const elements = {
  creditsCount: document.getElementById('creditsCount'),
  creditsPill: document.getElementById('creditsPill'),
  btnOpenPricing: document.getElementById('btnOpenPricing'),
  btnOpenSettings: document.getElementById('btnOpenSettings'),
  videoForm: document.getElementById('videoForm'),
  youtubeUrlInput: document.getElementById('youtubeUrlInput'),
  btnGenerate: document.getElementById('btnGenerate'),
  samplePills: document.querySelectorAll('.sample-pill'),
  processingSection: document.getElementById('processingSection'),
  processingStatusText: document.getElementById('processingStatusText'),
  processingSubtext: document.getElementById('processingSubtext'),
  studioSection: document.getElementById('studioSection'),
  paywallTeaserCard: document.getElementById('paywallTeaserCard'),
  btnUnlockPaywall: document.getElementById('btnUnlockPaywall'),
  btnTogglePreviewMode: document.getElementById('btnTogglePreviewMode'),
  previewModeLabel: document.getElementById('previewModeLabel'),
  
  // Video Meta
  videoThumb: document.getElementById('videoThumb'),
  videoTitle: document.getElementById('videoTitle'),
  videoAuthor: document.getElementById('videoAuthor'),
  videoViews: document.getElementById('videoViews'),
  videoDuration: document.getElementById('videoDuration'),
  videoCategory: document.getElementById('videoCategory'),
  hookBadge: document.getElementById('hookBadge'),
  btnCopyAll: document.getElementById('btnCopyAll'),
  btnDownloadMd: document.getElementById('btnDownloadMd'),

  // Tabs
  tabBtns: document.querySelectorAll('.tab-btn'),
  tabPanes: document.querySelectorAll('.tab-pane'),
  xThreadFeed: document.getElementById('xThreadFeed'),
  linkedinCard: document.getElementById('linkedinCard'),
  quotesGrid: document.getElementById('quotesGrid'),
  rawMarkdownContent: document.getElementById('rawMarkdownContent'),

  // Tab Action Buttons
  btnCopyThread: document.getElementById('btnCopyThread'),
  btnOpenInX: document.getElementById('btnOpenInX'),
  btnCopyLinkedin: document.getElementById('btnCopyLinkedin'),
  btnCopyAllQuotes: document.getElementById('btnCopyAllQuotes'),
  btnCopyRawMarkdown: document.getElementById('btnCopyRawMarkdown'),

  // Pricing buttons
  btnTryFree: document.getElementById('btnTryFree'),
  btnBuyPack: document.getElementById('btnBuyPack'),
  btnBuyMonthly: document.getElementById('btnBuyMonthly'),

  // Checkout Modal
  checkoutModal: document.getElementById('checkoutModal'),
  btnCloseCheckout: document.getElementById('btnCloseCheckout'),
  mockCheckoutForm: document.getElementById('mockCheckoutForm'),
  btnApplePay: document.getElementById('btnApplePay'),
  btnApplePayText: document.getElementById('btnApplePayText'),
  checkoutItemTitle: document.getElementById('checkoutItemTitle'),
  checkoutPriceText: document.getElementById('checkoutPriceText'),
  btnConfirmPay: document.getElementById('btnConfirmPay'),
  btnPayLabel: document.getElementById('btnPayLabel'),
  tabPlanPack: document.getElementById('tabPlanPack'),
  tabPlanMonthly: document.getElementById('tabPlanMonthly'),
  checkoutCardNum: document.getElementById('checkoutCardNum'),

  // Dev & Test Sandbox Controls
  btnTestReset0: document.getElementById('btnTestReset0'),
  btnTestReset1: document.getElementById('btnTestReset1'),
  btnTestAdd50: document.getElementById('btnTestAdd50'),
  btnTestSetPro: document.getElementById('btnTestSetPro'),

  // Settings Modal
  settingsModal: document.getElementById('settingsModal'),
  btnCloseSettings: document.getElementById('btnCloseSettings'),
  btnSaveSettings: document.getElementById('btnSaveSettings'),
  settingProvider: document.getElementById('settingProvider'),
  settingApiKey: document.getElementById('settingApiKey'),
  settingLanguage: document.getElementById('settingLanguage'),
  footerSettingsLink: document.getElementById('footerSettingsLink'),

  toastContainer: document.getElementById('toastContainer')
};

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
  updateCreditsUI();
  bindEvents();

  // Load Naval Ravikant demo by default into input for instant instant delight
  elements.youtubeUrlInput.value = SAMPLE_VIDEOS.naval.url;
}

// Update Credits Display in Navigation & Pricing Cards
function updateCreditsUI() {
  if (STATE.isUnlimited) {
    elements.creditsCount.textContent = 'PRO 无限次使用';
    elements.creditsPill.style.background = 'rgba(16, 185, 129, 0.2)';
    elements.creditsPill.style.borderColor = 'rgba(16, 185, 129, 0.4)';
    elements.creditsPill.style.color = '#6ee7b7';
    
    if (elements.btnOpenPricing) {
      elements.btnOpenPricing.innerHTML = '<span>👑 Pro 特权中心</span>';
    }
    if (elements.btnBuyMonthly) {
      elements.btnBuyMonthly.textContent = '当前特权已激活 ✓';
      elements.btnBuyMonthly.classList.add('btn-active-plan');
    }
  } else {
    elements.creditsCount.textContent = `${STATE.credits} 次可用额度`;
    if (elements.btnOpenPricing) {
      elements.btnOpenPricing.innerHTML = '<span>升级额度</span>';
    }
    if (elements.btnBuyMonthly) {
      elements.btnBuyMonthly.textContent = '开通 $19/月 无限次';
      elements.btnBuyMonthly.classList.remove('btn-active-plan');
    }

    if (STATE.credits === 0) {
      elements.creditsPill.style.background = 'rgba(239, 68, 68, 0.15)';
      elements.creditsPill.style.borderColor = 'rgba(239, 68, 68, 0.35)';
      elements.creditsPill.style.color = '#fca5a5';
    } else {
      elements.creditsPill.style.background = 'rgba(139, 92, 246, 0.15)';
      elements.creditsPill.style.borderColor = 'rgba(139, 92, 246, 0.35)';
      elements.creditsPill.style.color = '#d8b4fe';
    }
  }

  // Update Free Trial Button Label
  if (elements.btnTryFree) {
    if (STATE.credits === 0 && !STATE.isUnlimited) {
      elements.btnTryFree.textContent = '已试用 (额度已用完)';
    } else {
      elements.btnTryFree.textContent = '免费体验';
    }
  }
}

function saveCredits(count, isUnlimited = false) {
  STATE.credits = count;
  STATE.isUnlimited = isUnlimited;
  localStorage.setItem('tubetoviral_credits', count.toString());
  localStorage.setItem('tubetoviral_unlimited', isUnlimited.toString());
  updateCreditsUI();
}

// ==========================================================================
// Event Listeners
// ==========================================================================
function bindEvents() {
  // Form submission
  elements.videoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const url = elements.youtubeUrlInput.value.trim();
    if (!url) return;
    processVideoUrl(url);
  });

  // Sample quick pills
  elements.samplePills.forEach(pill => {
    pill.addEventListener('click', () => {
      const videoKey = pill.getAttribute('data-video');
      if (SAMPLE_VIDEOS[videoKey]) {
        elements.youtubeUrlInput.value = SAMPLE_VIDEOS[videoKey].url;
        processVideoUrl(SAMPLE_VIDEOS[videoKey].url, videoKey);
      }
    });
  });

  // Tabs switching
  elements.tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const tabId = btn.getAttribute('data-tab');
      switchTab(tabId);
    });
  });

  // Toggle preview mode manually (Demo feature)
  elements.btnTogglePreviewMode.addEventListener('click', () => {
    STATE.isPreviewMode = !STATE.isPreviewMode;
    updatePreviewModeUI();
    renderAllPanes();
    showToast(STATE.isPreviewMode ? "已切换为 30% 锁定预览模式 (展示锁单效果)" : "已切换为 完整解锁交付模式");
  });

  // Copy buttons
  elements.btnCopyThread.addEventListener('click', copyFullThread);
  elements.btnCopyLinkedin.addEventListener('click', copyLinkedinPost);
  elements.btnCopyAllQuotes.addEventListener('click', copyAllQuotes);
  elements.btnCopyRawMarkdown.addEventListener('click', copyRawMarkdown);
  elements.btnCopyAll.addEventListener('click', copyAllAssetsTogether);
  elements.btnDownloadMd.addEventListener('click', downloadMarkdownFile);

  // X Intent
  elements.btnOpenInX.addEventListener('click', () => {
    if (!STATE.currentPack) return;
    const hookText = STATE.currentPack.thread[0].content;
    const intentUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(hookText)}`;
    window.open(intentUrl, '_blank');
  });

  // Pricing & Unlock triggers
  elements.btnOpenPricing.addEventListener('click', () => {
    if (STATE.isUnlimited) {
      openCheckoutModal('monthly');
    } else {
      openCheckoutModal('pack');
    }
  });
  elements.creditsPill.addEventListener('click', () => {
    if (STATE.isUnlimited) {
      openCheckoutModal('monthly');
    } else {
      openCheckoutModal('pack');
    }
  });
  elements.btnUnlockPaywall.addEventListener('click', () => openCheckoutModal('pack'));
  elements.btnBuyPack.addEventListener('click', () => openCheckoutModal('pack'));
  elements.btnBuyMonthly.addEventListener('click', () => openCheckoutModal('monthly'));
  elements.btnTryFree.addEventListener('click', () => {
    elements.youtubeUrlInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    elements.youtubeUrlInput.focus();
  });

  // Plan switch tabs inside Checkout Modal
  if (elements.tabPlanPack) {
    elements.tabPlanPack.addEventListener('click', () => setCheckoutPlan('pack'));
  }
  if (elements.tabPlanMonthly) {
    elements.tabPlanMonthly.addEventListener('click', () => setCheckoutPlan('monthly'));
  }

  // Credit Card number auto-spacing (4242 8888 6666 4242)
  if (elements.checkoutCardNum) {
    elements.checkoutCardNum.addEventListener('input', (e) => {
      let value = e.target.value.replace(/\D/g, '').substring(0, 16);
      let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      e.target.value = formatted;
    });
  }

  // Checkout modal controls
  elements.btnCloseCheckout.addEventListener('click', closeCheckoutModal);
  elements.checkoutModal.addEventListener('click', (e) => {
    if (e.target === elements.checkoutModal) closeCheckoutModal();
  });
  elements.mockCheckoutForm.addEventListener('submit', handleCheckoutSuccess);
  elements.btnApplePay.addEventListener('click', handleCheckoutSuccess);

  // Settings modal controls
  elements.btnOpenSettings.addEventListener('click', openSettingsModal);
  elements.footerSettingsLink.addEventListener('click', (e) => {
    e.preventDefault();
    openSettingsModal();
  });
  elements.btnCloseSettings.addEventListener('click', closeSettingsModal);
  elements.settingsModal.addEventListener('click', (e) => {
    if (e.target === elements.settingsModal) closeSettingsModal();
  });
  elements.btnSaveSettings.addEventListener('click', saveSettings);

  // Dev & Test Sandbox Controls
  if (elements.btnTestReset0) {
    elements.btnTestReset0.addEventListener('click', () => {
      saveCredits(0, false);
      if (STATE.currentPack) {
        STATE.isPreviewMode = true;
        updatePreviewModeUI();
        renderAllPanes();
      }
      showToast("🧪 [测试沙盒] 额度已重置为 0，已进入 30% 锁定付费墙拦截模式！", "warning");
    });
  }
  if (elements.btnTestReset1) {
    elements.btnTestReset1.addEventListener('click', () => {
      saveCredits(1, false);
      showToast("🧪 [测试沙盒] 已恢复新手 1 次免费体验额度！");
    });
  }
  if (elements.btnTestAdd50) {
    elements.btnTestAdd50.addEventListener('click', () => {
      saveCredits(STATE.credits + 50, STATE.isUnlimited);
      STATE.isPreviewMode = false;
      updatePreviewModeUI();
      renderAllPanes();
      showToast("🧪 [测试沙盒] 已充值 50 次额度！");
    });
  }
  if (elements.btnTestSetPro) {
    elements.btnTestSetPro.addEventListener('click', () => {
      saveCredits(999, true);
      STATE.isPreviewMode = false;
      updatePreviewModeUI();
      renderAllPanes();
      showToast("🧪 [测试沙盒] 已升级为 Pro 无限次特权会员！");
    });
  }
}

// ==========================================================================
// Video Processing Pipeline
// ==========================================================================
async function processVideoUrl(url, presetKey = null) {
  try {
    // Determine if user has credits or enters 30% preview
    if (STATE.isUnlimited) {
      STATE.isPreviewMode = false;
    } else if (STATE.credits > 0) {
      STATE.isPreviewMode = false;
      saveCredits(STATE.credits - 1, false);
      showToast(`⚡ 已消耗 1 次额度，剩余 ${STATE.credits} 次可用。`);
    } else {
      // 0 credits remaining: show 30% preview teaser mode
      STATE.isPreviewMode = true;
      showToast("⚠️ 当前已达免费额度上限，已为你生成 30% 精彩内容预览！", "warning");
    }

    updatePreviewModeUI();

    // Show processing animation
    elements.processingSection.style.display = 'block';
    elements.studioSection.style.display = 'none';
    elements.processingSection.scrollIntoView({ behavior: 'smooth', block: 'center' });

    // Animated progress steps
    const steps = [
      { title: "正在连接 YouTube 接口，提取高能字幕与元数据...", sub: "获取高频词频、音频语调与讨论焦点...", node: 'step1' },
      { title: "AI 正在解构深层论点与商业/认知底层逻辑...", sub: "提炼第一性原理、反共识洞察与高杠杆行动指南...", node: 'step2' },
      { title: "正在打造 98+ 高点击率 X (Twitter) Hook 与 7 篇连推...", sub: "构建信息密度爬升、递进认知与自传播 CTA...", node: 'step3' },
      { title: "正在生成 LinkedIn 深度复盘长文与 5 条日常排期金句...", sub: "适配领袖专业排版、话题标签与单周内容库...", node: 'step4' }
    ];

    for (let i = 0; i < steps.length; i++) {
      elements.processingStatusText.textContent = steps[i].title;
      if (elements.processingSubtext) {
        elements.processingSubtext.textContent = steps[i].sub;
      }

      document.querySelectorAll('.step-node').forEach((node, idx) => {
        if (idx <= i) node.classList.add('active');
        else node.classList.remove('active');
      });

      await new Promise(r => setTimeout(r, 600));
    }

    // Load or generate asset pack
    let pack = null;

    // Check if matched preset
    if (presetKey && SAMPLE_VIDEOS[presetKey]) {
      pack = SAMPLE_VIDEOS[presetKey];
    } else {
      // Check url matching
      const foundPreset = Object.values(SAMPLE_VIDEOS).find(v => url.includes(v.youtubeId) || url === v.url);
      if (foundPreset) {
        pack = foundPreset;
      } else {
        // Dynamic synthesis for custom YouTube URL with safe timeout
        let meta = {};
        try {
          const controller = new AbortController();
          const timerId = setTimeout(() => controller.abort(), 2200);
          const oembedRes = await fetch(`https://noembed.com/embed?url=${encodeURIComponent(url)}`, {
            signal: controller.signal
          }).catch(() => null);
          clearTimeout(timerId);

          if (oembedRes && oembedRes.ok) {
            const data = await oembedRes.json().catch(() => null);
            if (data) {
              if (data.title) meta.title = data.title;
              if (data.author_name) meta.author_name = data.author_name;
            }
          }
        } catch (err) {
          console.warn("oEmbed fetch skipped or timed out, using intelligent synthesis:", err);
        }

        const lang = (STATE.settings && STATE.settings.language) || 'zh';
        pack = generateDynamicAssetPack(url, meta, lang);
      }
    }

    STATE.currentPack = pack;

    // Render pack to UI
    renderAssetPack(pack);

    // Hide processing, show studio
    elements.processingSection.style.display = 'none';
    elements.studioSection.style.display = 'block';
    elements.studioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });

    // Trigger celebration confetti
    triggerConfetti();
    showToast("🎉 恭喜！YouTube 爆款资产包已全部生成就绪！");
  } catch (error) {
    console.error("Error processing video:", error);
    elements.processingSection.style.display = 'none';
    showToast("处理视频时出现异常，请重试: " + error.message, "warning");
  }
}

// Update Preview Mode Indicator
function updatePreviewModeUI() {
  if (STATE.isPreviewMode) {
    elements.previewModeLabel.textContent = "🔒 预览模式: 30% 锁定中 (点击切换)";
    elements.btnTogglePreviewMode.style.borderColor = "var(--accent-amber)";
    elements.btnTogglePreviewMode.style.color = "#fde68a";
    elements.paywallTeaserCard.style.display = "block";
  } else {
    elements.previewModeLabel.textContent = "👁️ 交付模式: 完整解锁 (点击切换)";
    elements.btnTogglePreviewMode.style.borderColor = "var(--border-subtle)";
    elements.btnTogglePreviewMode.style.color = "var(--text-dim)";
    elements.paywallTeaserCard.style.display = "none";
  }
}

// ==========================================================================
// Rendering Asset Pack
// ==========================================================================
function renderAssetPack(pack) {
  // Update Source Video Banner
  elements.videoThumb.src = pack.thumbnail;
  elements.videoTitle.textContent = pack.title;
  elements.videoAuthor.textContent = pack.channel;
  elements.videoViews.textContent = pack.views;
  elements.videoDuration.textContent = pack.duration;
  elements.videoCategory.textContent = pack.category;
  elements.hookBadge.textContent = `⚡ Hook 点击评分: ${pack.hookScore}/100 (${pack.hookType})`;

  renderAllPanes();
}

function renderAllPanes() {
  if (!STATE.currentPack) return;
  renderXThread(STATE.currentPack.thread, STATE.isPreviewMode);
  renderLinkedIn(STATE.currentPack.linkedinPost, STATE.isPreviewMode);
  renderQuotes(STATE.currentPack.quotes, STATE.isPreviewMode);
  renderRawMarkdown(STATE.currentPack, STATE.isPreviewMode);
}

// 1. Render X (Twitter) Thread
function renderXThread(thread, isPreview) {
  elements.xThreadFeed.innerHTML = '';

  thread.forEach((tweet, idx) => {
    const isLocked = isPreview && idx >= 2; // In 30% preview, lock tweets from 3 onwards
    
    const card = document.createElement('div');
    card.className = `x-tweet-card ${isLocked ? 'blurred-content-locked' : ''}`;

    const isHook = tweet.type === 'hook';
    const isCta = tweet.type === 'cta';

    card.innerHTML = `
      <div class="x-thread-connector"></div>
      <div class="x-avatar-col">
        <div class="x-avatar">${STATE.currentPack.channel ? STATE.currentPack.channel.charAt(0) : '⚡'}</div>
      </div>
      <div class="x-content-col">
        <div class="x-author-row">
          <div class="x-author-info">
            <span class="x-name">${STATE.currentPack.channel || 'Creator'}</span>
            <span class="x-verified">✓</span>
            <span class="x-handle">@${(STATE.currentPack.channel || 'creator').replace(/\s+/g, '').toLowerCase()}</span>
            <span class="x-time">· ${idx === 0 ? '置顶爆款' : `${idx + 1}/7`}</span>
          </div>
          ${isHook ? '<span class="x-badge-hook">🔥 黄金 Hook (99% CTR)</span>' : ''}
          ${isCta ? '<span class="x-badge-hook" style="background: rgba(16,185,129,0.15); color: #34d399; border-color: rgba(16,185,129,0.3)">🚀 闭环 CTA</span>' : ''}
        </div>
        
        <div class="x-tweet-text">${escapeHtml(tweet.content)}</div>
        
        <div class="x-tweet-footer">
          <div class="x-tweet-stats">
            <span class="x-stat-item">💬 ${120 + idx * 34}</span>
            <span class="x-stat-item">🔁 ${850 + idx * 110}</span>
            <span class="x-stat-item">❤️ ${(4.2 + idx * 0.8).toFixed(1)}K</span>
            <span class="x-stat-item">📊 ${(88 + idx * 15)}K</span>
          </div>
          <div class="x-tweet-actions">
            <button class="btn-copy-tweet ${isLocked ? 'locked-copy' : ''}" data-text="${isLocked ? '' : escapeAttr(tweet.content)}" data-locked="${isLocked}">
              ${isLocked ? '🔒 需解锁' : '复制单推'}
            </button>
          </div>
        </div>
      </div>
    `;

    elements.xThreadFeed.appendChild(card);
  });

  // Attach individual tweet copy
  elements.xThreadFeed.querySelectorAll('.btn-copy-tweet').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isLocked = btn.getAttribute('data-locked') === 'true';
      if (isLocked) {
        showToast("🔒 此推文为付费精炼拆解，请先解锁资产包！", "warning");
        openCheckoutModal('pack');
        return;
      }
      const text = btn.getAttribute('data-text');
      copyToClipboard(text, "已复制单条 Tweet 内容！");
    });
  });
}

// 2. Render LinkedIn Post
function renderLinkedIn(postContent, isPreview) {
  let displayContent = postContent;

  if (isPreview) {
    // Only show first 3 paragraphs, rest blurred
    const paragraphs = postContent.split('\n\n');
    const visiblePart = paragraphs.slice(0, 3).join('\n\n');
    const hiddenPart = paragraphs.slice(3).join('\n\n');

    elements.linkedinCard.innerHTML = `
      <div class="linkedin-header">
        <div class="linkedin-avatar">${STATE.currentPack.channel ? STATE.currentPack.channel.charAt(0) : '💼'}</div>
        <div class="linkedin-author-meta">
          <div class="linkedin-name-row">
            <span class="linkedin-name">${STATE.currentPack.channel || 'Executive Creator'}</span>
            <span class="linkedin-degree">• 1st</span>
            <button class="linkedin-btn-follow">+ 关注</button>
          </div>
          <div class="linkedin-bio">Founder & Principal Analyst | Dissecting High-Growth Startups & Tech Architecture</div>
          <div class="linkedin-time-globe">24 分钟前 • 🌐 公开</div>
        </div>
      </div>
      <div class="linkedin-post-body">${escapeHtml(visiblePart)}</div>
      <div class="linkedin-post-body blurred-content-locked" style="margin-top: -10px;">${escapeHtml(hiddenPart)}</div>
      <div class="linkedin-social-bar">
        <span class="linkedin-action-item">👍 赞 (1,842)</span>
        <span class="linkedin-action-item">💬 评论 (328)</span>
        <span class="linkedin-action-item">🔁 转发 (490)</span>
        <span class="linkedin-action-item">📤 发送</span>
      </div>
    `;
    return;
  }

  elements.linkedinCard.innerHTML = `
    <div class="linkedin-header">
      <div class="linkedin-avatar">${STATE.currentPack.channel ? STATE.currentPack.channel.charAt(0) : '💼'}</div>
      <div class="linkedin-author-meta">
        <div class="linkedin-name-row">
          <span class="linkedin-name">${STATE.currentPack.channel || 'Executive Creator'}</span>
          <span class="linkedin-degree">• 1st</span>
          <button class="linkedin-btn-follow">+ 关注</button>
        </div>
        <div class="linkedin-bio">Founder & Principal Analyst | Dissecting High-Growth Startups & Tech Architecture</div>
        <div class="linkedin-time-globe">24 分钟前 • 🌐 公开</div>
      </div>
    </div>
    <div class="linkedin-post-body">${escapeHtml(displayContent)}</div>
    <div class="linkedin-social-bar">
      <span class="linkedin-action-item">👍 赞 (1,842)</span>
      <span class="linkedin-action-item">💬 评论 (328)</span>
      <span class="linkedin-action-item">🔁 转发 (490)</span>
      <span class="linkedin-action-item">📤 发送</span>
    </div>
  `;
}

// 3. Render 5 Daily Quotes
function renderQuotes(quotes, isPreview) {
  elements.quotesGrid.innerHTML = '';

  const dayLabels = ['周一 • 深度启发', '周二 • 破局思维', '周三 • 行动复利', '周四 • 战略聚焦', '周五 • 终局认知'];

  quotes.forEach((quote, idx) => {
    const isLocked = isPreview && idx >= 2; // Lock quotes 3, 4, 5 in preview mode

    const card = document.createElement('div');
    card.className = `quote-card ${isLocked ? 'blurred-content-locked' : ''}`;

    card.innerHTML = `
      <div class="quote-card-header">
        <span class="quote-day-badge">${dayLabels[idx] || `Quote #${idx + 1}`}</span>
        <span class="quote-category">${quote.category}</span>
      </div>
      <div class="quote-content">${escapeHtml(quote.text)}</div>
      <div class="quote-card-footer">
        <span class="quote-chars">${quote.text.length} 字符 · 适合短推</span>
        <button class="btn-copy-quote ${isLocked ? 'locked-copy' : ''}" data-quote="${isLocked ? '' : escapeAttr(quote.text)}" data-locked="${isLocked}">
          ${isLocked ? '🔒 需解锁' : '复制金句'}
        </button>
      </div>
    `;

    elements.quotesGrid.appendChild(card);
  });

  // Attach individual quote copy
  elements.quotesGrid.querySelectorAll('.btn-copy-quote').forEach(btn => {
    btn.addEventListener('click', () => {
      const isLocked = btn.getAttribute('data-locked') === 'true';
      if (isLocked) {
        showToast("🔒 此金句排期卡片已锁定，请先升级额度解锁！", "warning");
        openCheckoutModal('pack');
        return;
      }
      const text = btn.getAttribute('data-quote');
      copyToClipboard(text, "已复制精炼金句！可直接排期至 Buffer 或 Hypefury。");
    });
  });
}

// 4. Render Raw Markdown
function renderRawMarkdown(pack, isPreview) {
  let md = generateMarkdownAssetPackString(pack, isPreview);
  elements.rawMarkdownContent.textContent = md;
}

// Helper to generate formatted Markdown string
function generateMarkdownAssetPackString(pack, isPreview) {
  let md = `# 📦 YouTube 爆款社交资产包: ${pack.title}
- 播客来源: ${pack.channel} (${pack.views}, 时长: ${pack.duration})
- 原始链接: ${pack.url}
- Hook 评分: ${pack.hookScore}/100 (${pack.hookType})
- 交付生成于: TubeToViral (https://tubetoviral.app)

---

## 🐦 1. X (Twitter) 爆款 Thread (共 7 篇)

`;

  pack.thread.forEach((t, i) => {
    if (isPreview && i >= 2) {
      md += `### Tweet ${i + 1}/7 [🔒 需购买 $9 Pack 解锁]\n[... 内容在 30% 预览中已锁定 ...]\n\n`;
    } else {
      md += `### Tweet ${i + 1}/7 (${t.type.toUpperCase()})\n${t.content}\n\n`;
    }
  });

  md += `---

## 💼 2. LinkedIn 深度专业复盘长文

`;

  if (isPreview) {
    const parts = pack.linkedinPost.split('\n\n');
    md += parts.slice(0, 3).join('\n\n') + '\n\n[🔒 剩余 70% LinkedIn 专业复盘与精准 Hashtags 需购买 $9 Pack 解锁]\n\n';
  } else {
    md += pack.linkedinPost + '\n\n';
  }

  md += `---

## ⚡ 3. 5 条精炼金句 / 日常排期短推 (Buffer / Hypefury 格式)

`;

  pack.quotes.forEach((q, i) => {
    if (isPreview && i >= 2) {
      md += `**[Day ${i + 1}] (${q.category})** [🔒 已锁定] - 解锁查看\n\n`;
    } else {
      md += `**[Day ${i + 1}] (${q.category})**\n"${q.text}"\n\n`;
    }
  });

  return md;
}

// ==========================================================================
// Tabs Switching
// ==========================================================================
function switchTab(tabId) {
  STATE.activeTab = tabId;

  elements.tabBtns.forEach(btn => {
    if (btn.getAttribute('data-tab') === tabId) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  elements.tabPanes.forEach(pane => {
    if (pane.id === tabId) {
      pane.classList.add('active');
    } else {
      pane.classList.remove('active');
    }
  });
}

// ==========================================================================
// Copy & Export Handlers
// ==========================================================================
function copyFullThread() {
  if (!STATE.currentPack) return;
  if (STATE.isPreviewMode) {
    showToast("🔒 当前为 30% 免费预览模式，完整 7 篇连推已锁定。请先解锁！", "warning");
    openCheckoutModal('pack');
    return;
  }
  const fullText = STATE.currentPack.thread
    .map(t => t.content)
    .join('\n\n---\n\n');
  copyToClipboard(fullText, "✅ 已复制整篇 X Thread！可直接粘贴或在 Typefully/Hypefury 中排期。");
}

function copyLinkedinPost() {
  if (!STATE.currentPack) return;
  if (STATE.isPreviewMode) {
    showToast("🔒 当前为 30% 免费预览模式，LinkedIn 完整复盘长文已锁定。请先解锁！", "warning");
    openCheckoutModal('pack');
    return;
  }
  copyToClipboard(STATE.currentPack.linkedinPost, "✅ 已复制 LinkedIn 深度复盘长文！已保留空行与排版。");
}

function copyAllQuotes() {
  if (!STATE.currentPack) return;
  if (STATE.isPreviewMode) {
    showToast("🔒 当前为 30% 免费预览模式，完整 5 条排期金句已锁定。请先解锁！", "warning");
    openCheckoutModal('pack');
    return;
  }
  const fullQuotes = STATE.currentPack.quotes
    .map((q, idx) => `[Day ${idx + 1} - ${q.category}]\n${q.text}`)
    .join('\n\n');
  copyToClipboard(fullQuotes, "✅ 已复制全部 5 条排期金句！");
}

function copyRawMarkdown() {
  if (!STATE.currentPack) return;
  const md = generateMarkdownAssetPackString(STATE.currentPack, STATE.isPreviewMode);
  copyToClipboard(md, STATE.isPreviewMode ? "📋 已复制 30% 预览 Markdown (锁定部分已标注)" : "✅ 已复制完整 Markdown 文本！可直接粘贴到 Obsidian 或 Notion。");
}

function copyAllAssetsTogether() {
  if (STATE.isPreviewMode) {
    showToast("🔒 当前为 30% 预览模式，整包包含锁定付费内容。请先解锁资产包！", "warning");
    openCheckoutModal('pack');
    return;
  }
  copyRawMarkdown();
}

function downloadMarkdownFile() {
  if (!STATE.currentPack) return;
  if (STATE.isPreviewMode) {
    showToast("🔒 完整 Markdown 导出为付费专属权益，请先解锁资产包！", "warning");
    openCheckoutModal('pack');
    return;
  }
  const md = generateMarkdownAssetPackString(STATE.currentPack, false);
  const blob = new Blob([md], { type: 'text/markdown;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  const safeTitle = (STATE.currentPack.title || 'asset_pack').replace(/[^a-zA-Z0-9_\u4e00-\u9fa5]/g, '_').substring(0, 30);
  a.download = `TubeToViral_${safeTitle}.md`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  showToast("📥 已成功下载 Markdown 资产包文件！");
}

// ==========================================================================
// Stripe-Style Checkout Modal
// ==========================================================================
let currentCheckoutPlan = 'pack'; // 'pack' or 'monthly'
let isCheckingOut = false;

function setCheckoutPlan(plan = 'pack') {
  currentCheckoutPlan = plan;

  // Toggle Tab UI
  if (elements.tabPlanPack && elements.tabPlanMonthly) {
    if (plan === 'pack') {
      elements.tabPlanPack.classList.add('active');
      elements.tabPlanMonthly.classList.remove('active');
    } else {
      elements.tabPlanPack.classList.remove('active');
      elements.tabPlanMonthly.classList.add('active');
    }
  }

  // Update Prices and Button Copy
  if (plan === 'pack') {
    elements.checkoutItemTitle.textContent = "Creator Micro-Pack (50 次视频额度)";
    elements.checkoutPriceText.textContent = "$9.00";
    elements.btnPayLabel.textContent = "立即支付 $9.00 并到账 50 次额度 ⚡";
  } else {
    elements.checkoutItemTitle.textContent = "Pro Unlimited 会员 (首月)";
    elements.checkoutPriceText.textContent = "$19.00";
    elements.btnPayLabel.textContent = "立即开通 $19.00/月 无限次会员 🚀";
  }
}

function openCheckoutModal(plan = 'pack') {
  if (STATE.isUnlimited && plan === 'pack') {
    plan = 'monthly';
  }
  setCheckoutPlan(plan);
  isCheckingOut = false;
  if (elements.btnConfirmPay) elements.btnConfirmPay.disabled = false;
  if (elements.btnApplePay) elements.btnApplePay.disabled = false;
  if (elements.btnApplePayText) elements.btnApplePayText.textContent = "Pay / GPay 快捷极速结账";
  elements.checkoutModal.style.display = 'flex';
}

function closeCheckoutModal() {
  elements.checkoutModal.style.display = 'none';
  isCheckingOut = false;
  if (elements.btnConfirmPay) elements.btnConfirmPay.disabled = false;
  if (elements.btnApplePay) elements.btnApplePay.disabled = false;
  if (elements.btnApplePayText) elements.btnApplePayText.textContent = "Pay / GPay 快捷极速结账";
  setCheckoutPlan(currentCheckoutPlan);
}

function handleCheckoutSuccess(e) {
  if (e) e.preventDefault();
  if (isCheckingOut) return;
  isCheckingOut = true;

  // Visual Loading Feedback & Anti-Double Submit
  if (elements.btnConfirmPay) elements.btnConfirmPay.disabled = true;
  if (elements.btnApplePay) elements.btnApplePay.disabled = true;
  if (elements.btnApplePayText) elements.btnApplePayText.textContent = "⚡ 正在连接 Pay / GPay 处理中...";
  elements.btnPayLabel.innerHTML = '<span class="spinner-inline"></span> 正在连接 Stripe 极速结算...';

  setTimeout(() => {
    closeCheckoutModal();

    if (currentCheckoutPlan === 'pack') {
      // Retain unlimited status if already Pro Unlimited
      saveCredits(STATE.credits + 50, STATE.isUnlimited);
      showToast("🎉 支付成功！已充值 50 次视频资产包额度！");
    } else {
      saveCredits(999, true);
      showToast("🚀 支付成功！已开通 Pro Unlimited 无限次权益！");
    }

    // Automatically unlock current preview
    STATE.isPreviewMode = false;
    updatePreviewModeUI();
    renderAllPanes();

    // Fire fireworks confetti
    triggerConfetti(true);

    // Smooth scroll to studio to view unlocked assets
    if (elements.studioSection && elements.studioSection.style.display !== 'none') {
      elements.studioSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 850);
}

// ==========================================================================
// Settings Modal
// ==========================================================================
function openSettingsModal() {
  elements.settingProvider.value = STATE.settings.provider || 'builtin';
  elements.settingApiKey.value = STATE.settings.apiKey || '';
  elements.settingLanguage.value = STATE.settings.language || 'zh';
  elements.settingsModal.style.display = 'flex';
}

function closeSettingsModal() {
  elements.settingsModal.style.display = 'none';
}

function saveSettings() {
  STATE.settings = {
    provider: elements.settingProvider.value,
    apiKey: elements.settingApiKey.value.trim(),
    language: elements.settingLanguage.value
  };
  localStorage.setItem('tubetoviral_settings', JSON.stringify(STATE.settings));
  closeSettingsModal();
  showToast("⚙️ 设置已成功保存到本地浏览器！");
}

// ==========================================================================
// Utilities
// ==========================================================================
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage);
    }).catch(err => {
      fallbackCopyText(text, successMessage);
    });
  } else {
    fallbackCopyText(text, successMessage);
  }
}

function fallbackCopyText(text, successMessage) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  textarea.style.position = "fixed";
  textarea.style.left = "-9999px";
  document.body.appendChild(textarea);
  textarea.focus();
  textarea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage);
  } catch (err) {
    showToast("复制失败，请手动选取文本", "warning");
  }
  document.body.removeChild(textarea);
}

function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = 'toast';
  const icon = type === 'warning' ? '⚠️' : '⚡';
  toast.innerHTML = `<span>${icon}</span><span>${escapeHtml(message)}</span>`;
  elements.toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => {
      if (toast.parentNode) toast.parentNode.removeChild(toast);
    }, 300);
  }, 3200);
}

function triggerConfetti(massive = false) {
  if (typeof confetti !== 'function') return;
  if (massive) {
    confetti({
      particleCount: 160,
      spread: 100,
      origin: { y: 0.6 }
    });
  } else {
    confetti({
      particleCount: 70,
      spread: 60,
      origin: { y: 0.7 }
    });
  }
}

function escapeHtml(str) {
  if (!str) return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function escapeAttr(str) {
  if (!str) return '';
  return str.replace(/"/g, '&quot;').replace(/'/g, '&#039;');
}

// Start Application on Load
window.addEventListener('DOMContentLoaded', init);
