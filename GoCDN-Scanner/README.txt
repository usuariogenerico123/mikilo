# GoCDN-Scanner — Passive Subdomain & CDN Mapping CLI

All-in-one, zero-config recon tool. Enumerates subdomains and detects the CDN behind each one with a single command.

## Features

- **Zero Config:** No API keys required. Works out of the box.
- **100% Passive:** Never touches or alerts the target.
- **Portable:** Single precompiled binary. No dependencies, no installation.
- **Platforms:** Linux and Android (Termux).

## Supported CDNs

Cloudflare · Akamai · AWS CloudFront · Google · Fastly · Sucuri · BunnyCDN

## Installation (binaries included)

**Linux**
```bash
chmod +x gocdn-linux
./gocdn-linux
```

**Android (Termux)**
```bash
chmod +x gocdn-android
./gocdn-android
```

## Usage

```
gocdn [options] <arguments>

Options:
  --cdn <IP>            Scan all CDNs for a given IP
  --subdomain <DOMAIN>  Scan all CDNs and subdomains for a domain
  --save | -s           Save results to ./subdomains-<domain>.txt
  --help                Show help
```

**Examples**
```bash
./gocdn-linux --subdomain example.com
./gocdn-linux --subdomain example.com --save
./gocdn-linux --cdn 1.2.3.4
```

**Sample output**
```
240  ads-frontier.example.com   [23.53.11.135 23.53.11.143]
Cdn: >  [akamai akamai]
```

## Use Cases

- CDN infrastructure research and mapping
- Protection / misconfiguration auditing
- Shared edge-infrastructure detection
- Fast OSINT and attack-surface overview

## Note

100% passive — the tool never sends direct requests to the target.
Use only on domains you own or are authorized to test.
