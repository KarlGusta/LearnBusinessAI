# DESIGN.md

Visual world: ink-violet transit diagram, third sister of the shared engine.
The LLM Mastery Line is midnight navy, the Marketing Mastery Line is olive
with mustard; this line takes deep ink-violet #130f2b with an electric
violet #a78bfa signal wash lifting the key artifacts (service board, panels,
station tables). Porcelain #eceafc, the nine enamel line inks carry over
unchanged (scarlet cobalt amber green magenta sky violet orange teal), thin
porcelain strokes, pill controls. Type re-set to Space Grotesk caps + Inter
body so the line reads distinct even at thumbnail size.

Recognizable empty: a snaking colored line with hollow ticks on ink-violet.
The theme toggle swaps to a pale lavender day map (#e9e7f4 ground, #6d28d9
signal) mirroring the sisters' day-map behavior.

Decisions:
- Palette distance was checked against both sister lines before inking; navy
  was rejected because the first line already owns it.
- The engine (app.js) is forked, not rewritten: scheduler, streaks, network
  map, departures, all-stations, settings and JSON backup behave identically.
- Only the localStorage key (ai_conduit_v1), backup filename, branding and
  the theme hexes differ from the Marketing Mastery Line.
