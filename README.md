# Business AI Conduit Line

Personal learning dashboard: short term goal is a grounded, guarded business
AI live on a real site and messaging channels. Long term goal is owning the
full stack: fine-tuned open models, GEO discovery, ambient readiness, and a
productized agency offer. 102 one hour sessions across 9 phases, free
resources first with paid stations flagged.

## Thesis

From the Zuckerberg interview with Cleo Abram (Huge Conversations, 2024):

> "In the future every business, just like they have a website and a phone
> number and an email address and a social media account, is also going to
> have an AI that can interact with their customers to help them sell
> things, to help them do support."

The device is unknown: glasses, an orb, a speaker in every room, something
not invented yet. So this line trains the constants that survive any form
factor: the brain (models, agents, fine-tuning), the context (the business's
knowledge), and the channel adapters (web, messaging, voice, MCP). One brain,
many doors.

## The line

| Phases | Line | What it delivers |
| --- | --- | --- |
| 1-5 | Short term | Foundations, agent stack, RAG, conduit v1 shipped, channels live |
| 6-9 | Long term | Fine-tuning and owned weights, GEO, ambient readiness, productized offer |

Built for a CPU-only 96 GB RAM workstation: local inference via Ollama and
llama.cpp, fine-tuning on the free GPU rotation (Colab, Kaggle, Modal),
hosting on Supabase and Vercel free tiers.

## Run

Static site, no build. Open `index.html` directly or serve the folder.
Progress persists in this browser under the `ai_conduit_v1` localStorage key;
export a JSON backup from the Service panel.

## Lineage

Third line on the shared dashboard engine, forked from the Marketing Mastery
Line (itself forked from the LLM Mastery Line). Same engine, re-inked: deep
ink-violet ground with electric violet signal, Space Grotesk + Inter, so the
three dashboards are distinct at a glance.
