// Curriculum data: phases and tasks. Business AI Conduit Line.
// Each task = one 60 minute session. Order matters: the scheduler assigns
// pending tasks sequentially to upcoming active days.
// Free first. Paid stations are flagged and only used where the free ride
// genuinely ends.
// Thesis, from the Zuckerberg interview (Cleo Abram, Huge Conversations):
// every business has a website, a phone number, an email address and a
// social media account, and is going to have an AI that interacts with its
// customers. The device is unknown. The brain, the context and the channel
// adapters are what you own.

const PHASES = [
  {
    id: "p1",
    name: "Foundations",
    term: "short",
    goal: "How LLMs actually work at operator depth: tokens, attention, sampling, the open model landscape. The calculator rule: learn the thinking, not just the tool."
  },
  {
    id: "p2",
    name: "The Agent Stack",
    term: "short",
    goal: "Tools, structured outputs, MCP, memory: the parts that turn a model into a worker. Many AIs, not one AI, just like many apps, not one app."
  },
  {
    id: "p3",
    name: "Context and RAG",
    term: "short",
    goal: "RAG and knowledge engineering on Supabase pgvector. Personalized means it has context: the conduit only sells and supports as well as it knows the business."
  },
  {
    id: "p4",
    name: "Conduit v1",
    term: "short",
    goal: "The live business AI: evaluated, guarded, red-teamed, logged, with human handoff. Its two named jobs: help sell things, help do support."
  },
  {
    id: "p5",
    name: "Channels",
    term: "short",
    goal: "Web widget, WhatsApp, Instagram DM, email, and the business's own MCP endpoint. The device is unknown, so the core stays channel-agnostic."
  },
  {
    id: "p6",
    name: "Teach the Model",
    term: "long",
    goal: "Fine-tuning on free GPUs, quantized local inference on a RAM-rich CPU box, model soups, distillation. Open weights mean the business owns its AI instead of renting it."
  },
  {
    id: "p7",
    name: "GEO Discovery",
    term: "long",
    goal: "GEO: being the business that consumer AIs recommend and can talk to. Schema, llms.txt, quotable content, measurement. Where the SEO track and the conduit converge."
  },
  {
    id: "p8",
    name: "Ambient",
    term: "long",
    goal: "Voice and the ambient future: Whisper, Pipecat, the smart-speaker pattern, connected-home simulation, WebXR preview. The next major platform, whatever shape it takes."
  },
  {
    id: "p9",
    name: "Productize",
    term: "long",
    goal: "Website, phone, email, social, and now the AI. Package, price, demo, maintain, publish. Sign the first paying conduit client."
  }
];

const TASKS = [
  // ---------- PHASE 1: Foundations ----------
  { id: "t01", phase: "p1", type: "video", cost: "free",
    title: "3Blue1Brown: what a GPT actually is",
    sub: "Visual intuition: tokens become vectors, attention moves information between them, a probability stack predicts what comes next. Deliverable: explain attention in three sentences a client would repeat correctly.",
    links: [{ label: "Watch: But what is a GPT?", url: "https://www.youtube.com/results?search_query=3blue1brown+but+what+is+a+gpt+visual+intro+to+transformers" }] },

  { id: "t02", phase: "p1", type: "video", cost: "free",
    title: "3Blue1Brown: attention, visually",
    sub: "The companion video on attention itself, the only mechanism in the name transformer. Watch until the causal mask clicks, then sketch the query, key, value loop in notes from memory.",
    links: [{ label: "Watch: Attention in transformers", url: "https://www.youtube.com/results?search_query=3blue1brown+attention+in+transformers+visually+explained" }] },

  { id: "t03", phase: "p1", type: "video", cost: "free",
    title: "Karpathy: intro to large language models",
    sub: "The canonical one hour tour: pretraining, fine-tuning, capabilities, risks, from the person whose teaching the whole field forks. Deliverable: draw the three stages of building an LLM as a flow diagram.",
    links: [{ label: "Watch: Intro to LLMs", url: "https://www.youtube.com/results?search_query=andrej+karpathy+intro+to+large+language+models" }] },

  { id: "t04", phase: "p1", type: "video", cost: "free",
    title: "Karpathy deep dive, part 1",
    sub: "First half of the three and a half hour deep dive: tokenization, pretraining, fine-tuning, RLHF. Slow down and take running notes. This is the mental model every later station assumes.",
    links: [{ label: "Watch: Deep dive into LLMs, part 1", url: "https://www.youtube.com/results?search_query=karpathy+deep+dive+into+llms+like+chatgpt" }] },

  { id: "t05", phase: "p1", type: "video", cost: "free",
    title: "Karpathy deep dive, part 2",
    sub: "Finish: hallucinations, tool use, knowledge cut-offs. Deliverable: one notes page answering why a business AI invents prices and what Phase 4 will do about it. That page becomes the evals mandate.",
    links: [{ label: "Watch: Deep dive into LLMs, part 2", url: "https://www.youtube.com/results?search_query=karpathy+deep+dive+into+llms+like+chatgpt" }] },

  { id: "t06", phase: "p1", type: "article", cost: "free",
    title: "The Illustrated Transformer",
    sub: "The classic annotated walkthrough of the original transformer paper. Read with the diagram open and label each block in your own words. Referenced by every technical interview in the field.",
    links: [{ label: "Read the illustrated guide", url: "https://jalammar.github.io/illustrated-transformer/" }] },

  { id: "t07", phase: "p1", type: "project", cost: "free",
    title: "Hands-on: tokenization and token math",
    sub: "Open the tokenizer playground and paste a homepage paragraph from a real business. Count tokens, price the API call at current rates, note why phone numbers and addresses burn tokens. Optional: code along as Karpathy builds one from scratch.",
    links: [
      { label: "OpenAI tokenizer", url: "https://platform.openai.com/tokenizer" },
      { label: "Watch: Let's build the tokenizer", url: "https://www.youtube.com/results?search_query=karpathy+let%27s+build+the+tokenizer+in+60+minutes" }
    ] },

  { id: "t08", phase: "p1", type: "project", cost: "free",
    title: "Hands-on: embeddings and semantic search",
    sub: "Embeddings turn meaning into coordinates so similar questions land near each other. Build semantic search over 20 FAQ rows from a real business using sentence-transformers on CPU. Note three queries that keyword search missed.",
    links: [
      { label: "Sentence similarity task", url: "https://huggingface.co/tasks/sentence-similarity" },
      { label: "sentence-transformers", url: "https://www.sbert.net" }
    ] },

  { id: "t09", phase: "p1", type: "docs", cost: "free",
    title: "Context windows: the budget math",
    sub: "Read the provider guidance on context windows, then compute how many 500-token chunks of business knowledge fit in 8k, 32k and 128k. Deliverable: a token budget table for one real business. Context is a budget, spend it like one.",
    links: [{ label: "Context windows explained", url: "https://docs.claude.com/en/docs/build-with-claude/context-windows" }] },

  { id: "t10", phase: "p1", type: "project", cost: "free",
    title: "Sampling: temperature and determinism",
    sub: "Send the same sales enquiry at temperature 0 and temperature 1, five runs each. Deliverable: when must a business AI be deterministic, and what breaks when it is not. You have just discovered why Phase 4 exists.",
    links: [{ label: "Text generation guide", url: "https://platform.openai.com/docs/guides/text-generation" }] },

  { id: "t11", phase: "p1", type: "docs", cost: "free",
    title: "The open model landscape",
    sub: "Tour the open weights frontier: Llama generations, the leaderboard, license notes. Pick three conduit candidates: one hosted free tier, one runnable on your CPU-only 96 GB box, one fine-tunable on a free cloud GPU. Defend each pick in notes.",
    links: [
      { label: "Open LLM leaderboard", url: "https://huggingface.co/open-llm-leaderboard" },
      { label: "Ollama model library", url: "https://ollama.com/library" }
    ] },

  { id: "t12", phase: "p1", type: "project", cost: "free",
    title: "Checkpoint: the practice business",
    sub: "Choose the business this line rides on: your own site, a friend's, or a volunteer client. Collect 30 real customer questions from email, DMs and call notes. This corpus becomes the eval set in Phase 4 and the fine-tune in Phase 6. Calculator rule: you are learning the thinking, not just the tool.",
    links: [{ label: "The interview behind this line", url: "https://www.youtube.com/results?search_query=cleo+abram+mark+zuckerberg+huge+conversations" }] },

  // ---------- PHASE 2: The Agent Stack ----------
  { id: "t13", phase: "p2", type: "article", cost: "free",
    title: "Building effective agents",
    sub: "The essay the whole industry quotes: workflows versus agents, and when more is less. Deliverable: three SMB jobs that should stay workflows and never become agents, with the reason for each.",
    links: [{ label: "Anthropic: Building effective agents", url: "https://www.anthropic.com/research/building-effective-agents" }] },

  { id: "t14", phase: "p2", type: "docs", cost: "free",
    title: "Function calling: giving the model hands",
    sub: "Official guide to typed tools a model can call. Read once for the concepts. The conduit's hands: check hours, price a band, book a slot, escalate to a human.",
    links: [{ label: "Function calling guide", url: "https://platform.openai.com/docs/guides/function-calling" }] },

  { id: "t15", phase: "p2", type: "project", cost: "free",
    title: "Build: your first tool-using agent",
    sub: "An agent with two tools over practice business data: get_hours and quote_band. Watch it decide which to call, then break it with an ambiguous question and record the failure mode. First agent, kept honest.",
    links: [{ label: "Function calling guide", url: "https://platform.openai.com/docs/guides/function-calling" }] },

  { id: "t16", phase: "p2", type: "project", cost: "free",
    title: "Structured outputs, zero parse failures",
    sub: "Force the model to return strict JSON against a schema. Extract service, date, suburb and urgency from five raw enquiry messages into typed fields. This is how conversations become database rows.",
    links: [{ label: "Structured outputs guide", url: "https://platform.openai.com/docs/guides/structured-outputs" }] },

  { id: "t17", phase: "p2", type: "course", cost: "free",
    title: "Short course: functions, tools and agents",
    sub: "Free short course on tool calling and agent loops. Take it in one sitting, then rebuild the previous station's agent in the taught pattern and note what the framework actually saves you.",
    links: [{ label: "DeepLearning.AI short courses", url: "https://www.deeplearning.ai/short-courses/" }] },

  { id: "t18", phase: "p2", type: "docs", cost: "free",
    title: "MCP: one standard for every AI client",
    sub: "Model Context Protocol: an open standard letting any AI client use your tools and data. Read the intro and FAQ. Why you care: it is how one business AI serves every assistant instead of one app per assistant.",
    links: [{ label: "Model Context Protocol", url: "https://modelcontextprotocol.io" }] },

  { id: "t19", phase: "p2", type: "course", cost: "free",
    title: "Short course: introduction to MCP",
    sub: "The free course on building MCP servers, produced with Anthropic. Build the example server locally and call it from an MCP-capable client. One hour, and the agent-to-agent future stops being a rumor.",
    links: [{ label: "DeepLearning.AI short courses", url: "https://www.deeplearning.ai/short-courses/" }] },

  { id: "t20", phase: "p2", type: "project", cost: "free",
    title: "Build: your first MCP server",
    sub: "Write an MCP server exposing list_services, get_hours and estimate_quote over practice business data. Keep it: every later phase wires more into this artifact. The business becomes an address other AIs can talk to.",
    links: [{ label: "Model Context Protocol docs", url: "https://modelcontextprotocol.io" }] },

  { id: "t21", phase: "p2", type: "course", cost: "free",
    title: "Hugging Face agents course, part 1",
    sub: "The free agents course with certificate: frameworks, tools, multi-step reasoning. Start units one and two tonight. The certificate is proof item one for the agency wall.",
    links: [{ label: "HF Agents Course", url: "https://huggingface.co/learn/agents-course" }] },

  { id: "t22", phase: "p2", type: "course", cost: "free",
    title: "Hugging Face agents course, part 2",
    sub: "Finish and earn the certificate. Then rewrite the station 15 tool agent in smolagents or LangGraph and note which framework earns a place in the permanent stack.",
    links: [
      { label: "HF Agents Course", url: "https://huggingface.co/learn/agents-course" },
      { label: "smolagents docs", url: "https://huggingface.co/docs/smolagents" }
    ] },

  { id: "t23", phase: "p2", type: "docs", cost: "free",
    title: "Memory: what the conduit remembers",
    sub: "Short-term and long-term agent memory. Design the schema in notes: what to remember about a customer, job address and last quote, and what must never be stored, the PII rules. Privacy is a feature you sell.",
    links: [{ label: "mem0", url: "https://github.com/mem0ai/mem0" }] },

  { id: "t24", phase: "p2", type: "article", cost: "free",
    title: "A practical guide to building agents",
    sub: "OpenAI's field guide: orchestration, context management, guardrails, evaluations as a flywheel. Map every pattern to a conduit feature. Phase 4 is the execution of this list.",
    links: [{ label: "OpenAI: building agents", url: "https://platform.openai.com/docs/guides/agents" }] },

  // ---------- PHASE 3: Context Is the Product ----------
  { id: "t25", phase: "p3", type: "docs", cost: "free",
    title: "LlamaIndex: the data framework",
    sub: "Connectors, indexes, query engines: the vocabulary of retrieval. Run the quickstart against a folder of practice business documents and keep the notebook.",
    links: [{ label: "LlamaIndex docs", url: "https://docs.llamaindex.ai/" }] },

  { id: "t26", phase: "p3", type: "docs", cost: "free",
    title: "Supabase pgvector: free vector home",
    sub: "Enable pgvector on a free Supabase project, create the documents table with a vector column and a match function. Inference and hosting already live on free tiers: this completes the set at zero cost.",
    links: [{ label: "pgvector on Supabase", url: "https://supabase.com/docs/guides/database/extensions/pgvector" }] },

  { id: "t27", phase: "p3", type: "project", cost: "free",
    title: "Chunk the business",
    sub: "Crawl the practice site, strip boilerplate, chunk to roughly 500 tokens with overlap, store with metadata: page, heading, updated. Note what the crawler missed that a customer would know. That gap is your knowledge engineering job.",
    links: [{ label: "LlamaIndex docs", url: "https://docs.llamaindex.ai/" }] },

  { id: "t28", phase: "p3", type: "project", cost: "free",
    title: "First retrieval: the conduit starts knowing",
    sub: "Embed the chunks, load Supabase, ask how much for a three bedroom move from Parramatta, and verify the right page comes back. Personalized means it has context: this station is that sentence, running.",
    links: [{ label: "pgvector on Supabase", url: "https://supabase.com/docs/guides/database/extensions/pgvector" }] },

  { id: "t29", phase: "p3", type: "article", cost: "free",
    title: "Chunking strategies",
    sub: "Fixed, semantic, parent-child: when each wins. Re-chunk one tricky page two different ways and compare retrievals side by side in notes.",
    links: [{ label: "Chunking strategies explained", url: "https://www.pinecone.io/learn/chunking-strategies/" }] },

  { id: "t30", phase: "p3", type: "docs", cost: "free",
    title: "Hybrid search: add the keyword half",
    sub: "Pure vector search misses exact codes, names and suburbs. Add BM25 alongside vectors in Supabase. Test ten queries and log which half caught what. Precision for facts, embeddings for meaning.",
    links: [{ label: "pgvector on Supabase", url: "https://supabase.com/docs/guides/database/extensions/pgvector" }] },

  { id: "t31", phase: "p3", type: "article", cost: "free",
    title: "Reranking: the cheap quality jump",
    sub: "Cross-encoder rerankers reorder candidates by true relevance after retrieval. Rerank top twenty down to top five on your ten test queries and note the lift. Runs on CPU at this scale, free.",
    links: [{ label: "sentence-transformers", url: "https://www.sbert.net" }] },

  { id: "t32", phase: "p3", type: "article", cost: "free",
    title: "Context engineering",
    sub: "Anthropic's engineering essay: treat the prompt as a budget across system, memory, tools and retrieved chunks. Rewrite the conduit system prompt under its rules and record the token savings.",
    links: [{ label: "Effective context engineering", url: "https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents" }] },

  { id: "t33", phase: "p3", type: "project", cost: "free",
    title: "Multi-tenant: one database, many clients",
    sub: "The agency pattern: add client_id, turn on row level security, attempt a cross-client read and watch it fail. This schema is how you scale to ten clients without ten databases.",
    links: [{ label: "Row level security", url: "https://supabase.com/docs/guides/database/postgres/row-level-security" }] },

  { id: "t34", phase: "p3", type: "project", cost: "free",
    title: "Freshness: the weekly knowledge wash",
    sub: "Knowledge rots the week a client changes a price. Schedule a free GitHub Action to re-crawl the site weekly, re-embed changed pages, log the run. The conduit stays correct because this job exists.",
    links: [{ label: "GitHub Actions docs", url: "https://docs.github.com/en/actions" }] },

  { id: "t35", phase: "p3", type: "docs", cost: "free",
    title: "The ugly documents: PDFs and price sheets",
    sub: "Real businesses keep knowledge in PDFs: price lists, brochures, manuals. Parse one real PDF into clean chunks with Docling or pypdf and compare extraction quality on tables.",
    links: [
      { label: "Docling", url: "https://github.com/docling-project/docling" },
      { label: "pypdf", url: "https://pypdf.readthedocs.io" }
    ] },

  { id: "t36", phase: "p3", type: "project", cost: "free",
    title: "Capstone: chat with the business",
    sub: "The full retrieval loop: question, retrieve, answer with citations to source pages. Demo to one human and log every miss. Context is the product, and this station is the first product.",
    links: [{ label: "LlamaIndex docs", url: "https://docs.llamaindex.ai/" }] },

  // ---------- PHASE 4: Conduit v1 ----------
  { id: "t37", phase: "p4", type: "docs", cost: "free",
    title: "OWASP top 10 for LLM apps",
    sub: "The standard attack taxonomy: injection, data leakage, excessive agency. Map each risk to a concrete conduit scenario, like an instruction hidden in a customer review field. Your security checklist starts here.",
    links: [{ label: "OWASP GenAI", url: "https://genai.owasp.org/" }] },

  { id: "t38", phase: "p4", type: "project", cost: "free",
    title: "The golden dataset: 50 questions",
    sub: "Write 50 real customer questions with verified answers for the practice business, seeded from the station 12 corpus. This file is the exam the conduit retakes after every change. The highest leverage hour in this phase.",
    links: [] },

  { id: "t39", phase: "p4", type: "docs", cost: "free",
    title: "Promptfoo: the exam runner",
    sub: "Wire the golden set into promptfoo, run the baseline, record the pass rate. From tonight, no change to the conduit ships without the exam. This is the habit clients never see and always benefit from.",
    links: [{ label: "Promptfoo docs", url: "https://www.promptfoo.dev" }] },

  { id: "t40", phase: "p4", type: "project", cost: "free",
    title: "Guardrails: the refusal muscle",
    sub: "Add rails: off-topic refusal, schema-validated outputs, and a hard rule for out-of-knowledge questions, say so and offer the human. NeMo Guardrails or plain code, either, documented either way.",
    links: [{ label: "NeMo Guardrails", url: "https://github.com/NVIDIA/NeMo-Guardrails" }] },

  { id: "t41", phase: "p4", type: "article", cost: "free",
    title: "RAGAS: score the retrieval",
    sub: "Faithfulness, answer relevancy, context precision: the standard RAG metrics. Score the conduit with RAGAS and log the numbers next to the promptfoo pass rate. Two scores, one dashboard.",
    links: [{ label: "RAGAS docs", url: "https://docs.ragas.io/" }] },

  { id: "t42", phase: "p4", type: "article", cost: "free",
    title: "Error analysis: read the failures",
    sub: "Hamel Husain's argument that evals start with reading failures by hand. Pull twenty transcripts, classify every miss, fix the top cause, rerun the exam. This loop is the difference between a demo and a product.",
    links: [{ label: "Your AI product needs evals", url: "https://hamel.dev/blog/posts/evals/" }] },

  { id: "t43", phase: "p4", type: "project", cost: "free",
    title: "Hallucination containment",
    sub: "Every answer must cite its source page; every unanswerable question must meet a graceful refusal with a handoff. Test ten trick questions and fix what leaks. A conduit that invents a price is a liability, not an asset.",
    links: [] },

  { id: "t44", phase: "p4", type: "project", cost: "free",
    title: "Red team your own conduit",
    sub: "Attack it: price manipulation, injected instructions, jailbreaks, PII fishing. Document every successful break and its fix, dated. This document reassures the scariest future client.",
    links: [{ label: "OWASP GenAI", url: "https://genai.owasp.org/" }] },

  { id: "t45", phase: "p4", type: "project", cost: "free",
    title: "The brand voice card",
    sub: "Write the practice business's voice: tone, forbidden claims, escalation triggers, one worked example of a perfect reply. A/B two voice cards against the golden set and keep the winner. Tone is a deliverable, not an accident.",
    links: [] },

  { id: "t46", phase: "p4", type: "project", cost: "free",
    title: "Logging and the client KPIs",
    sub: "Log every conversation to Supabase: resolved, escalated, sentiment, channel. Define the numbers you will report monthly: containment rate, top escalation reasons, leads captured. Numbers, not adjectives.",
    links: [{ label: "Supabase", url: "https://supabase.com/docs" }] },

  { id: "t47", phase: "p4", type: "project", cost: "free",
    title: "The human handoff",
    sub: "The conduit never traps a customer. Build escalation to the owner's WhatsApp or email with the full transcript attached. The promise to every client: the AI handles the routine, the human gets the rest, faster.",
    links: [] },

  { id: "t48", phase: "p4", type: "project", cost: "free",
    title: "Ship: conduit v1 live",
    sub: "Embed the widget on the practice site on the free Vercel tier. Tell one real user group it exists. Collect the first week of transcripts: this becomes the fine-tuning corpus in Phase 6. Conduit v1 is live.",
    links: [{ label: "Vercel", url: "https://vercel.com" }] },

  // ---------- PHASE 5: Channels ----------
  { id: "t49", phase: "p5", type: "docs", cost: "paid",
    title: "WhatsApp Business Cloud API",
    sub: "Set up the Cloud API test number and send your first sandbox message. Free to build and test, metered per conversation in production, hence the paid flag. The channel SMB customers already keep open.",
    links: [{ label: "WhatsApp Cloud API", url: "https://developers.facebook.com/docs/whatsapp/cloud-api/get-started" }] },

  { id: "t50", phase: "p5", type: "project", cost: "paid",
    title: "The WhatsApp conduit",
    sub: "Wire the Phase 4 brain to the test number. Send a photo of a dented fridge and ask for a quote band: multimodal in, grounded answer out. Log latency and transcript quality against the web channel.",
    links: [{ label: "WhatsApp Cloud API", url: "https://developers.facebook.com/docs/whatsapp/cloud-api/get-started" }] },

  { id: "t51", phase: "p5", type: "docs", cost: "free",
    title: "Instagram messaging, by the policy",
    sub: "The messaging API behind DM automation, and the 24-hour window rule every builder must respect. Read before touching the keyboard. Your clients' customers live in this inbox.",
    links: [{ label: "Instagram Platform docs", url: "https://developers.facebook.com/docs/instagram-platform" }] },

  { id: "t52", phase: "p5", type: "project", cost: "free",
    title: "DM auto-reply, within the rules",
    sub: "Within policy: acknowledge, answer from the knowledge base, escalate on intent. Same brain, new door. Note which enquiry types must always route straight to the human.",
    links: [{ label: "Instagram Platform docs", url: "https://developers.facebook.com/docs/instagram-platform" }] },

  { id: "t53", phase: "p5", type: "docs", cost: "free",
    title: "Messenger: the third Meta door",
    sub: "Skim the Messenger platform docs and note what ports over unchanged from WhatsApp and Instagram. One codebase, three doors: the Graph API family rewards learning it once.",
    links: [{ label: "Messenger Platform docs", url: "https://developers.facebook.com/docs/messenger-platform" }] },

  { id: "t54", phase: "p5", type: "project", cost: "free",
    title: "The channel router",
    sub: "Refactor: one agent core, thin adapters per channel, every message tagged web, wa, ig or mail, identity hashed from phone number. The device is unknown, so the core stays channel-agnostic. That is the whole lesson of this phase.",
    links: [] },

  { id: "t55", phase: "p5", type: "docs", cost: "free",
    title: "Email: the oldest door, reopened",
    sub: "Give info@ the same brain: IMAP in, SMTP or Resend's free tier out, replies queued for owner approval. The oldest business channel, now answered in seconds instead of days.",
    links: [{ label: "Resend", url: "https://resend.com" }] },

  { id: "t56", phase: "p5", type: "project", cost: "free",
    title: "The public MCP endpoint",
    sub: "Publish the Phase 2 MCP server over HTTP with hours, services and quote tools. Now any MCP-capable assistant can query this business directly. Every business an AI, every AI an address.",
    links: [{ label: "Model Context Protocol", url: "https://modelcontextprotocol.io" }] },

  { id: "t57", phase: "p5", type: "docs", cost: "free",
    title: "llms.txt: the machine-readable front door",
    sub: "The proposed standard for a site summary machines read first. Write one for the practice site by hand, link it to the conduit endpoints. This bridges directly into the GEO phase.",
    links: [{ label: "llms.txt", url: "https://llmstxt.site/" }] },

  { id: "t58", phase: "p5", type: "project", cost: "free",
    title: "Capstone: one brain, four doors",
    sub: "Web, WhatsApp, Instagram, email, all live on the one core. Ask the same question through each door and compare transcripts. Document the adapter pattern: it is how you survive whatever device comes next.",
    links: [] },

  // ---------- PHASE 6: Teach the Model ----------
  { id: "t59", phase: "p6", type: "article", cost: "free",
    title: "RAG versus fine-tuning: the decision",
    sub: "The framework every builder recites: facts live in retrieval, behavior lives in weights. Write the agency decision tree against the three real cases you have met so far on this line.",
    links: [{ label: "Fine-tuning vs RAG", url: "https://www.pinecone.io/learn/fine-tuning-llms-vs-rag/" }] },

  { id: "t60", phase: "p6", type: "course", cost: "free",
    title: "Fine-tuning concepts: SFT, LoRA, QLoRA",
    sub: "Hugging Face's free fine-tuning material: supervised fine-tuning, low-rank adapters, quantized training, when each applies. Work the concept units before touching a GPU.",
    links: [{ label: "Hugging Face Learn", url: "https://huggingface.co/learn" }] },

  { id: "t61", phase: "p6", type: "docs", cost: "free",
    title: "The free GPU rotation",
    sub: "Three free GPU sources: Colab free tier, Kaggle's weekly GPU hours, Modal's free credits. Create all three accounts today and run a hello-GPU notebook on each. No graphics card on the desk required, ever.",
    links: [
      { label: "Google Colab", url: "https://colab.research.google.com" },
      { label: "Kaggle", url: "https://www.kaggle.com" },
      { label: "Modal", url: "https://modal.com" }
    ] },

  { id: "t62", phase: "p6", type: "project", cost: "free",
    title: "LoRA fine-tune on a free T4",
    sub: "Run the Unsloth notebook on free Colab: LoRA fine-tune a small open model on 500 question-answer pairs synthesized from the practice business knowledge base. Save the adapter. The first weights you have ever owned.",
    links: [
      { label: "Unsloth docs", url: "https://docs.unsloth.ai" },
      { label: "Unsloth notebooks", url: "https://github.com/unslothai/notebooks" }
    ] },

  { id: "t63", phase: "p6", type: "project", cost: "free",
    title: "Dataset craft: the reusable recipe",
    sub: "Turn Phase 4 transcripts and the knowledge base into instruction pairs: question, ideal answer, and refused-when-unanswerable examples. Quality beats quantity. Document the recipe: a reusable agency asset.",
    links: [] },

  { id: "t64", phase: "p6", type: "project", cost: "free",
    title: "Local inference on the 96 GB box",
    sub: "Quantize the fine-tune to GGUF and serve it with Ollama or llama.cpp, CPU only. A RAM-rich box without a graphics card is a real inference machine for this model class. Benchmark tokens per second and cost per thousand answers.",
    links: [
      { label: "Ollama", url: "https://ollama.com" },
      { label: "llama.cpp", url: "https://github.com/ggml-org/llama.cpp" }
    ] },

  { id: "t65", phase: "p6", type: "project", cost: "free",
    title: "Model soup: merge the checkpoints",
    sub: "The technique people keep shouting about on social media, real and free: merge checkpoints with mergekit. Merge two fine-tunes, evaluate the soup against both parents on the golden set, keep the winner.",
    links: [{ label: "mergekit", url: "https://github.com/arcee-ai/mergekit" }] },

  { id: "t66", phase: "p6", type: "project", cost: "free",
    title: "The verdict: fine-tune versus RAG",
    sub: "Same golden set, two brains: the RAG conduit versus the fine-tuned model. Note where each wins, fresh facts versus tone and latency, and write the one-page rule you will hand clients.",
    links: [{ label: "Promptfoo docs", url: "https://www.promptfoo.dev" }] },

  { id: "t67", phase: "p6", type: "docs", cost: "free",
    title: "Serve cheap behind one API",
    sub: "Host the fine-tune behind a single endpoint: Groq's free tier, Together's free models, or Cloudflare Workers AI's free allocation. Build the cost per thousand conversations table for each option.",
    links: [
      { label: "Groq", url: "https://console.groq.com" },
      { label: "Cloudflare Workers AI", url: "https://developers.cloudflare.com/workers-ai/" }
    ] },

  { id: "t68", phase: "p6", type: "article", cost: "free",
    title: "Distillation: small models, big teachers",
    sub: "How small models are taught by large ones, the pattern behind every on-device assistant. Then write the thesis note: a small owned model is the operating system layer for hardware that does not exist yet. First mover, remember.",
    links: [{ label: "distilabel", url: "https://github.com/argilla-io/distilabel" }] },

  { id: "t69", phase: "p6", type: "project", cost: "free",
    title: "The agency voice model",
    sub: "Fine-tune a small model on your own writing: site copy, proposals, emails. The agency voice model answers in your register. Warm-up act for the creator artifact in Phase 9.",
    links: [{ label: "Unsloth docs", url: "https://docs.unsloth.ai" }] },

  { id: "t70", phase: "p6", type: "docs", cost: "free",
    title: "The retraining ritual",
    sub: "Version datasets on the Hub, retrain when eval scores drift, calendar the monthly run. Weights are a commitment: document what gets re-learned, when, and who signs off.",
    links: [{ label: "HF Datasets docs", url: "https://huggingface.co/docs/datasets" }] },

  // ---------- PHASE 7: Discovery When AIs Choose ----------
  { id: "t71", phase: "p7", type: "article", cost: "free",
    title: "GEO: how AIs pick who to cite",
    sub: "How generative engines retrieve and cite: chunk similarity, authority, quotable structure. Read the primer end to end, then list the five levers you control as the site's builder.",
    links: [{ label: "Ahrefs: what is GEO", url: "https://ahrefs.com/blog/generative-engine-optimization/" }] },

  { id: "t72", phase: "p7", type: "project", cost: "free",
    title: "The five-engine baseline",
    sub: "Ask ChatGPT, Gemini, Perplexity, Copilot and an AI Overview: best practice-service in area. Log which businesses get named and infer why: reviews, content, mentions. This sheet is the client-facing GEO baseline, rerun monthly.",
    links: [
      { label: "ChatGPT", url: "https://chatgpt.com" },
      { label: "Gemini", url: "https://gemini.google.com" },
      { label: "Perplexity", url: "https://www.perplexity.ai" }
    ] },

  { id: "t73", phase: "p7", type: "project", cost: "free",
    title: "Deploy llms.txt, properly",
    sub: "Finish what Phase 5 started: llms.txt deployed, accurate, linked from the schema and the conduit endpoint. Verify an assistant can read it cold and answer basic business questions from it alone.",
    links: [{ label: "llms.txt", url: "https://llmstxt.site/" }] },

  { id: "t74", phase: "p7", type: "docs", cost: "free",
    title: "Schema, deeper",
    sub: "Beyond LocalBusiness: Service, Offer, FAQPage, Organization sameAs. Validate everything with the Rich Results test. Machines cite what machines can parse.",
    links: [
      { label: "schema.org LocalBusiness", url: "https://schema.org/LocalBusiness" },
      { label: "Rich Results test", url: "https://search.google.com/test/rich-results" }
    ] },

  { id: "t75", phase: "p7", type: "article", cost: "free",
    title: "What LLMs actually cite",
    sub: "The research consensus: original data, statistics, clean definitions, comparison tables get quoted. Reshape three practice pages to be quotable and note the before and after.",
    links: [{ label: "Growth Memo", url: "https://www.growth-memo.com/" }] },

  { id: "t76", phase: "p7", type: "project", cost: "free",
    title: "The machine-readable business",
    sub: "Consolidate the stack: schema, llms.txt, the MCP endpoint, the clean knowledge base. Write the one-page thesis: a business any AI can verify, cite and talk to wins the next discovery layer. Publish it on the agency site.",
    links: [] },

  { id: "t77", phase: "p7", type: "article", cost: "free",
    title: "Community signals, ethically",
    sub: "Forums and Reddit weigh heavily in AI answers. Design the ethical participation plan: answer real questions, disclose affiliation, never astroturf. Note the three communities where your vertical lives.",
    links: [{ label: "Growth Memo", url: "https://www.growth-memo.com/" }] },

  { id: "t78", phase: "p7", type: "docs", cost: "free",
    title: "Local intent inside AI answers",
    sub: "How local queries play in AI Overviews and assistants: the business profile as the entity anchor that ties everything together. Connect this to the Marketing Mastery Line: the two tracks meet exactly here.",
    links: [{ label: "Google Search Central", url: "https://developers.google.com/search/docs" }] },

  { id: "t79", phase: "p7", type: "project", cost: "free",
    title: "The GEO report",
    sub: "Monthly, one page, numbers only: citations across five engines, share of answers naming the client, movement since last run. Sheet or Looker Studio. This report is a retainer line item.",
    links: [{ label: "Looker Studio", url: "https://lookerstudio.google.com" }] },

  { id: "t80", phase: "p7", type: "article", cost: "free",
    title: "Publish the position piece",
    sub: "Write and publish: every business will have an AI, will yours be discoverable to it. The interview quote is your headline, the practice business is your evidence. The agency stakes its ground in public.",
    links: [{ label: "The interview behind this line", url: "https://www.youtube.com/results?search_query=cleo+abram+mark+zuckerberg+huge+conversations" }] },

  // ---------- PHASE 8: Ambient ----------
  { id: "t81", phase: "p8", type: "article", cost: "free",
    title: "The ambient thesis",
    sub: "Reread the platform argument: the next major platform after phones, in some unknown shape, glasses, orbs, a device in every room. Write the constants list: the brain, the adapters, the identity layer. Everything else is packaging.",
    links: [{ label: "The interview behind this line", url: "https://www.youtube.com/results?search_query=cleo+abram+mark+zuckerberg+huge+conversations" }] },

  { id: "t82", phase: "p8", type: "docs", cost: "free",
    title: "Voice pipeline anatomy",
    sub: "The voice loop: transcription, turn-taking, the brain, speech out, interruptions. Read the Pipecat architecture page end to end before building anything in this phase.",
    links: [{ label: "Pipecat docs", url: "https://docs.pipecat.ai/" }] },

  { id: "t83", phase: "p8", type: "project", cost: "free",
    title: "Whisper, locally, on CPU",
    sub: "Run Whisper locally: transcribe five real voicemails or call recordings from the practice business. Note accuracy on names and suburbs: transcription errors become answer errors downstream.",
    links: [{ label: "Whisper", url: "https://github.com/openai/whisper" }] },

  { id: "t84", phase: "p8", type: "project", cost: "free",
    title: "The browser voice bot",
    sub: "The free, zero-infra path: Web Speech API in the browser, press and talk to the conduit. The rough edges are the lesson: latency, interruptions, silence. Demo it on the practice site.",
    links: [{ label: "Web Speech API", url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API" }] },

  { id: "t85", phase: "p8", type: "project", cost: "free",
    title: "Pipecat: wire the brain to a voice",
    sub: "Wire the Phase 4 conduit into Pipecat's local transport: speak a question, hear the grounded answer with sources. Log end-to-end latency in notes and mark the acceptable threshold.",
    links: [{ label: "Pipecat docs", url: "https://docs.pipecat.ai/" }] },

  { id: "t86", phase: "p8", type: "docs", cost: "free",
    title: "Realtime speech APIs: read, then price",
    sub: "The frontier pattern: speech-to-speech models with tool use mid-sentence. Read both API guides, note the architecture, price a real deployment. Reading is free, building bills: that is the whole station.",
    links: [
      { label: "OpenAI Realtime API", url: "https://platform.openai.com/docs/guides/realtime" },
      { label: "Gemini API", url: "https://ai.google.dev/gemini-api" }
    ] },

  { id: "t87", phase: "p8", type: "project", cost: "free",
    title: "The smart-speaker pattern",
    sub: "Smart speakers are the deployed ambient layer and the pattern every future device borrows. Build a minimal ask-the-business skill in the Alexa developer simulator. No hardware purchased. Note the invocation and privacy constraints.",
    links: [{ label: "Alexa developer", url: "https://developer.amazon.com/en-US/alexa" }] },

  { id: "t88", phase: "p8", type: "project", cost: "free",
    title: "Simulate the connected home",
    sub: "Home Assistant in Docker on the big-RAM box: the every-room pattern in miniature, all free. Add one automation that touches the conduit: a morning briefing that queries hours and bookings over MQTT.",
    links: [{ label: "Home Assistant", url: "https://www.home-assistant.io" }] },

  { id: "t89", phase: "p8", type: "project", cost: "free",
    title: "Wokwi: the microcontroller, simulated",
    sub: "Embedded thinking in a browser tab: Wokwi simulates the microcontroller, publish a button press over MQTT, watch it arrive in Home Assistant. Rehearse the connected-device future for zero dollars.",
    links: [{ label: "Wokwi", url: "https://wokwi.com" }] },

  { id: "t90", phase: "p8", type: "project", cost: "free",
    title: "WebXR: AR without the glasses",
    sub: "The WebXR emulator extension plus A-Frame: build a floating talk-to-the-business panel anchored in space, view it through the emulator. The glasses-ready pattern, rehearsed today on hardware you already own.",
    links: [
      { label: "WebXR emulator extension", url: "https://github.com/MozillaReality/WebXR-emulator-extension" },
      { label: "A-Frame", url: "https://aframe.io" }
    ] },

  { id: "t91", phase: "p8", type: "article", cost: "free",
    title: "Glasses, presence, and what survives",
    sub: "The device that sees what you see and hears what you hear, per the interview, is the ideal form for personalized AI. Survey the glasses field, then write the conduit feature list for an always-worn device, marking which you can build now.",
    links: [{ label: "The interview behind this line", url: "https://www.youtube.com/results?search_query=cleo+abram+mark+zuckerberg+huge+conversations" }] },

  { id: "t92", phase: "p8", type: "project", cost: "free",
    title: "Capstone: conduit anywhere",
    sub: "Demo day: the same business brain reached by browser voice, the simulated speaker, and the WebXR panel. Three form factors, one core, zero new hardware. Document the adapter pattern: this is what device-proof looks like.",
    links: [] },

  // ---------- PHASE 9: Productize ----------
  { id: "t93", phase: "p9", type: "project", cost: "free",
    title: "The ladder one-pager",
    sub: "The sales narrative on one page: the business got a website, a phone number, an email address, a social account. The next rung on the ladder is the AI that sells and supports. Polish it: this page opens every client meeting.",
    links: [{ label: "The interview behind this line", url: "https://www.youtube.com/results?search_query=cleo+abram+mark+zuckerberg+huge+conversations" }] },

  { id: "t94", phase: "p9", type: "project", cost: "free",
    title: "Offer architecture",
    sub: "Package the line: discovery audit, two-week pilot, monthly retainer covering knowledge freshness, eval runs and channel care. Price three tiers and write the scope guardrails that stop scope creep before it starts.",
    links: [] },

  { id: "t95", phase: "p9", type: "docs", cost: "free",
    title: "Compliance basics for client AI",
    sub: "Conversation logs are personal data: consent, retention, deletion. Read the regulator's guidance, then write the one-page policy template every deployment signs. Boring, protective, and it reads as maturity to clients.",
    links: [{ label: "OAIC privacy guidance", url: "https://www.oaic.gov.au" }] },

  { id: "t96", phase: "p9", type: "project", cost: "free",
    title: "The demo that sells itself",
    sub: "The conduit live on your own agency site, seeded with a fictional vertical, answering real questions in real time. Prospects do not read proposals, they talk to the product.",
    links: [{ label: "Vercel", url: "https://vercel.com" }] },

  { id: "t97", phase: "p9", type: "article", cost: "free",
    title: "Vertical templates",
    sub: "Productize by vertical: movers, lawyers, dentists share most of their knowledge base shape. Document the template: fields, pages, channels, voice card. The second client in a vertical takes days, not weeks.",
    links: [] },

  { id: "t98", phase: "p9", type: "project", cost: "free",
    title: "The creator artifact",
    sub: "The agency's public AI, the interview's interactive sculpture idea, built your way: the Phase 6 voice model on your own knowledge, deployed as ask-the-agency. Train it on the topics you own and the topics you refuse. It sells while you sleep.",
    links: [{ label: "The interview behind this line", url: "https://www.youtube.com/results?search_query=cleo+abram+mark+zuckerberg+huge+conversations" }] },

  { id: "t99", phase: "p9", type: "project", cost: "free",
    title: "The maintenance playbook",
    sub: "The retainer machine: monthly eval rerun, knowledge diff, channel audit, one-page report. Write the runbook so a future hire could execute it. Retainers scale on runbooks, not heroics.",
    links: [] },

  { id: "t100", phase: "p9", type: "project", cost: "free",
    title: "The case study",
    sub: "Numbers, before and after: containment rate, leads captured, hours saved, for the practice business. Publish it. Local buyers convert on proof, not adjectives.",
    links: [] },

  { id: "t101", phase: "p9", type: "docs", cost: "free",
    title: "The frontier ritual",
    sub: "Subscribe and calendar thirty minutes weekly: SEOFOMO, Growth Memo, Latent Space, Unsloth and MCP changelogs. Keeping up is the responsibility the interview names; this ritual is how it actually happens.",
    links: [
      { label: "SEOFOMO", url: "https://seofomo.co" },
      { label: "Growth Memo", url: "https://www.growth-memo.com/" },
      { label: "Latent Space", url: "https://www.latent.space" }
    ] },

  { id: "t102", phase: "p9", type: "project", cost: "free",
    title: "Terminus: the first paying client",
    sub: "Sign the first paying conduit client at pilot pricing. Ship, measure thirty days, write the second case study. Long term complete: you build, own, and sell the AI every business is about to need.",
    links: [] }
];
