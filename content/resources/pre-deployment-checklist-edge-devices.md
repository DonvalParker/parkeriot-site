---
title: "Pre-deployment checklist for unattended edge devices"
topic: "Field deployment"
date: "2026-06-15"
excerpt: "A practical checklist before you ship an IoT gateway or edge device to a site you cannot easily revisit."
readTime: "6 min"
relatedService: "linux"
---

Most IoT failures happen after the device leaves the bench — power cuts, flaky networks, SD card wear, and no one on site who can power-cycle a router. This checklist covers the basics before you call a deployment done.

## Power and boot behaviour

- Confirm clean shutdown and recovery after abrupt power loss (not just a controlled reboot).
- Test watchdog behaviour: does the device come back without manual intervention?
- Document expected boot time and what "healthy" looks like on first start.

## Storage and logging

- Use appropriate storage for write patterns (SD card vs eMMC vs USB SSD).
- Rotate logs so a long-running device does not fill the disk.
- Ensure logs are accessible remotely — you will need them at 2am.

## Networking

- Test on the actual connectivity path (4G, site Wi-Fi, or Ethernet) — not just your office network.
- Confirm remote access works (VPN, SSH, or your chosen method) from outside the site LAN.
- Plan for WAN failover or graceful degradation if the link drops.

## Data and updates

- Verify local buffering when upstream is unavailable — and that buffered data is not lost on reboot.
- Document how firmware or software updates are applied in the field.
- Test OTA or update paths before you need them under pressure.

## Handover

- Leave a one-page runbook: how to reach the device, what services run, where logs live, and who to call.
- Confirm alerting reaches the right people and that alert thresholds make sense for the environment.

If several of these are still open, the system may work in a demo but not as a deployment. A short technical discovery pass often pays for itself before hardware ships.
