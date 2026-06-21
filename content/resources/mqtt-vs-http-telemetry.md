---
title: "When to use MQTT vs HTTP for sensor telemetry"
topic: "Connectivity"
date: "2026-06-01"
excerpt: "A concise comparison to help you pick the right protocol before you wire up devices and dashboards."
readTime: "5 min"
relatedService: "data"
---

MQTT and HTTP both move data from devices to a server. The right choice depends on how often you send data, how many devices you have, and what happens when the network is unreliable.

## MQTT fits when

- Devices publish small, frequent updates (sensor readings, status heartbeats).
- You have many devices and want efficient, persistent connections.
- You need pub/sub — multiple subscribers (dashboards, rules, storage) without the device knowing about each one.
- The broker can buffer messages when a subscriber is temporarily offline (with sensible QoS settings).

Typical stack: ESP32 or edge gateway → MQTT broker (Mosquitto, cloud broker) → Node-RED, Grafana, or your backend.

## HTTP fits when

- Devices send occasional batches (e.g. once per hour or on an event).
- You already have a REST API and want the simplest integration path.
- Infrastructure teams are more comfortable with HTTPS endpoints than running a broker.
- You are prototyping and want to POST JSON to a single URL without broker setup.

## Practical guidance

| Factor | MQTT | HTTP |
|--------|------|------|
| Many small messages | Strong fit | Awkward (connection overhead) |
| Firewall / corporate networks | May need broker port open | Often easier (443) |
| Offline buffering | Broker + QoS; edge can queue | Client must retry; design carefully |
| Learning curve | Broker + topics + QoS | Familiar request/response |

For field deployments, MQTT plus a local edge buffer (Raspberry Pi or similar) is common: devices talk to the edge over MQTT; the edge handles upload when WAN is available.

Neither protocol fixes bad network design. If connectivity is the weak point, solve that before optimising message format.
