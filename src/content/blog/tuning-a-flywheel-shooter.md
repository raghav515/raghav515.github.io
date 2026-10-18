---
title: "Tuning a flywheel shooter for consistent shots"
date: 2025-06-10
excerpt: "Why your flywheel launcher scatters shots even when the wheel speed reads constant — and a practical loop for dialling in real consistency."
tags: ["Robotics", "Controls", "Tutorial"]
draft: false
---

A flywheel launcher looks simple: spin a wheel, feed a projectile, and it flies. In practice, getting **consistent** shots — the same distance, shot after shot — is where most of the work hides. Here's the loop I've used across three Robocon builds.

## Start with what actually varies

Wheel RPM is only one variable. The ones that quietly wreck consistency are:

- **Contact time** between projectile and wheel (compression and feed geometry).
- **Surface wear** on the wheel — grip changes as it heats and abrades.
- **Battery sag** under load, which drops effective RPM exactly when you fire.

If you only close the loop on commanded RPM, you'll chase ghosts.

## A practical tuning loop

1. **Lock the mechanics first.** Fix compression and feed angle before touching control gains. A repeatable feed beats a clever controller.
2. **Close the loop on measured RPM**, not commanded — use the encoder and a PID that recovers quickly from the load dip at release.
3. **Log every shot.** Distance, RPM at release, battery voltage. Ten shots tell you more than ten opinions.
4. **Compensate for sag.** Feed-forward on battery voltage removes a surprising amount of scatter.

> The goal isn't a perfect model. It's a launcher whose error is small *and boring* — predictable enough to aim around.

Once the spread is tight, aiming becomes a lookup table instead of a prayer. That's the whole game.
