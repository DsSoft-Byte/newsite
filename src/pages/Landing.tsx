import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Background Grid */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.04] z-[-1]" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="g" x1="0" x2="1">
              <stop offset="0" stopColor="#fff" stopOpacity="0.04" />
              <stop offset="1" stopColor="#fff" stopOpacity="0.02" />
            </linearGradient>
          </defs>
          <g stroke="url(#g)" strokeWidth="1">
            <g>
              <path d="M100 0 L100 900" />
              <path d="M300 0 L300 900" />
              <path d="M500 0 L500 900" />
              <path d="M700 0 L700 900" />
              <path d="M900 0 L900 900" />
              <path d="M1100 0 L1100 900" />
              <path d="M1300 0 L1300 900" />
            </g>
            <g>
              <path d="M0 120 L1600 120" />
              <path d="M0 300 L1600 300" />
              <path d="M0 480 L1600 480" />
              <path d="M0 660 L1600 660" />
            </g>
          </g>
        </svg>
      </div>

      <div className="max-w-[1100px] mx-auto px-5">

        {/* Hero */}
        <section className="grid grid-cols-1 lg:grid-cols-[1fr_420px] gap-12 items-center mb-16">
          <div>
            <div className="text-muted-foreground text-[13px] tracking-[0.16em] uppercase mb-[18px]">
              Solo operator • 18yo specialist • Full-stack hardware & software
            </div>

            <h2 className="font-light text-[40px] m-0 mb-[18px] text-foreground leading-[1.05]">
              From silicon to firmware to runtime — complete system mastery.
            </h2>

            <p className="text-muted-foreground m-0 mb-7 text-base max-w-[58ch]">
              Independent security researcher and systems engineer specializing in reverse engineering, exploit research, and embedded development. Expert in microsoldering (0603 components, GPU VRAM, QFP64 STM32), custom PCB design, bootrom exploitation, runtime injection with Frida, and jailbreak detection bypass. 5000+ hours in IDA Pro defeating multi-layer commercial encryption systems.
            </p>

            <div className="flex gap-3">
              <Button
                className="bg-gradient-to-b from-primary/[0.12] to-primary/[0.06] border-primary/25 text-foreground hover:from-primary/[0.18] hover:to-primary/[0.10]"
              >
                Explore capabilities
              </Button>
              <Button
                variant="ghost"
                className="bg-transparent text-muted-foreground border-white/[0.03] hover:text-foreground hover:bg-white/[0.02]"
              >
                iOSBridge
              </Button>
            </div>
          </div>

          <aside className="bg-gradient-to-b from-white/[0.02] to-white/[0.01] rounded-xl p-6 border border-white/[0.03] shadow-[0_8px_30px_rgba(2,6,23,0.6)]">
            <div className="text-[13px] text-muted-foreground mb-3">Live metrics</div>

            <div className="flex justify-between items-center gap-3 mb-3.5">
              <div>
                <div className="font-semibold text-lg">5000+ hrs</div>
                <div className="text-xs text-muted-foreground">IDA Pro mastery</div>
              </div>
              <div>
                <div className="font-semibold text-lg">18yo</div>
                <div className="text-xs text-muted-foreground">Solo operator</div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3.5 mt-4">
              <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                <div className="font-semibold">iOSBridge</div>
                <div className="text-xs text-muted-foreground">Unlocking & device mgmt</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                <div className="font-semibold">AI Trading Bot</div>
                <div className="text-xs text-muted-foreground">Autonomous risk systems</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                <div className="font-semibold">FastOTA™</div>
                <div className="text-xs text-muted-foreground">Intelligent rollback</div>
              </div>
              <div className="p-2.5 rounded-lg bg-white/[0.01] border border-white/[0.02]">
                <div className="font-semibold">LayerOne™</div>
                <div className="text-xs text-muted-foreground">Custom DRM system</div>
              </div>
            </div>
          </aside>
        </section>

        {/* Capabilities */}
        <section id="capabilities">
          <div className="flex justify-between items-end mb-[18px] flex-col md:flex-row gap-2">
            <div>
              <h3 className="m-0 font-normal text-xl">Capabilities</h3>
              <div className="text-muted-foreground text-[13px] mt-1.5">
                Systems engineering, security analysis, tooling, and embedded development.
              </div>
            </div>
            <div className="text-muted-foreground text-[13px]">Selected examples</div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] mb-16">
            <div className="p-[22px] rounded-[10px] bg-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h3 className="font-medium text-base m-0 mb-2">Advanced microsoldering</h3>
              <p className="text-muted-foreground text-sm m-0">
                Production-grade board repair and modification. 0603 resistors, GPU VRAM replacement, GPU core rework, QFP64 STM32 packages. Full PCB design and fabrication pipeline.
              </p>
            </div>
            <div className="p-[22px] rounded-[10px] bg-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h3 className="font-medium text-base m-0 mb-2">iOS/Phone exploitation</h3>
              <p className="text-muted-foreground text-sm m-0">
                Bootrom analysis, firmware reverse engineering, runtime instrumentation with Frida. Dylib injection, jailbreak detection bypass, real-time app interception and manipulation.
              </p>
            </div>
            <div className="p-[22px] rounded-[10px] bg-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h3 className="font-medium text-base m-0 mb-2">Embedded systems engineering</h3>
              <p className="text-muted-foreground text-sm m-0">
                Complete hardware-firmware-software stacks from concept to production. MCU programming, custom protocol design, device recovery, low-level debugging and optimization.
              </p>
            </div>
            <div className="p-[22px] rounded-[10px] bg-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h3 className="font-medium text-base m-0 mb-2">Binary & crypto analysis</h3>
              <p className="text-muted-foreground text-sm m-0">
                5000+ hours in IDA Pro. Multi-layer obfuscation defeat, commercial DRM teardown, Lua VM decryption, plugin architecture mapping. SASL v3 for X-Plane: 5-layer crypto bypass.
              </p>
            </div>
            <div className="p-[22px] rounded-[10px] bg-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h3 className="font-medium text-base m-0 mb-2">Penetration testing</h3>
              <p className="text-muted-foreground text-sm m-0">
                Full-scope security assessments, vulnerability discovery, exploit development, secure boot bypass research, and comprehensive threat modeling.
              </p>
            </div>
            <div className="p-[22px] rounded-[10px] bg-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h3 className="font-medium text-base m-0 mb-2">Custom tooling & automation</h3>
              <p className="text-muted-foreground text-sm m-0">
                High-reliability OTA systems with intelligent rollback, proprietary DRM (LayerOne™), automated trading bots with AI risk assessment, and specialized analysis frameworks.
              </p>
            </div>
          </div>
        </section>

        {/* Case Studies */}
        <section id="work" className="mb-20">
          <div className="mb-4">
            <h3 className="m-0 font-normal text-xl mb-1">Selected work</h3>
            <div className="text-muted-foreground text-[13px]">
              Production systems, research projects, and commercial tools
            </div>
          </div>

          <div className="flex gap-5 items-stretch mb-6 flex-col lg:flex-row">
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">iOSBridge — €10 lifetime iDevice control</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Full-featured Windows tool for iDevice unlocking and management. Open-source alternative to 3uTools with transparent pricing and no subscription traps.
              </p>
              <div className="text-xs text-muted-foreground">
                Tech: Custom USB protocol implementation, CoreFoundation bindings, secure device pairing
              </div>
            </div>
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">SASL v3 Commercial — 5-layer crypto defeat</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Complete reverse engineering of X-Plane's SASL v3 protection system. Defeated multi-stage obfuscation, encrypted Lua VM, and plugin architecture DRM.
              </p>
              <div className="text-xs text-muted-foreground">
                Tools: IDA Pro, custom decryption scripts, VM analysis, memory forensics
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-stretch mb-6 flex-col lg:flex-row">
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">Frida-based iOS runtime manipulation</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Real-time app interception framework. Dylib injection into protected iOS apps, jailbreak detection bypass, SSL pinning defeat, method hooking at runtime.
              </p>
              <div className="text-xs text-muted-foreground">
                Stack: Frida, Objective-C runtime, ARM64 assembly, CydiaSubstrate
              </div>
            </div>
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">AI trading bot with autonomous risk engine</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Fully automated trading system. AI-powered risk assessment, anomaly detection, multi-profile strategy execution, real-time market analysis.
              </p>
              <div className="text-xs text-muted-foreground">
                Features: FastOTA™ updates, LayerOne™ DRM, intelligent rollback system
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-stretch mb-6 flex-col lg:flex-row">
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">Production PCB & embedded systems</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Custom hardware solutions from schematic to production. QFP64 STM32 programming, custom protocol stacks, bootloader development, and device recovery tools.
              </p>
              <div className="text-xs text-muted-foreground">
                Capabilities: Altium/KiCad design, SMT assembly, firmware development, debugging
              </div>
            </div>
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">GPU & advanced board repair</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Component-level repair and modification. VRAM replacement on GPUs, GPU core rework, 0603 component soldering, BGA reballing, and circuit analysis.
              </p>
              <div className="text-xs text-muted-foreground">
                Equipment: Hot air station, reflow oven, microscope, thermal imaging
              </div>
            </div>
          </div>

          <div className="flex gap-5 items-stretch flex-col lg:flex-row">
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">VESC extreme power upgrades — 480A @ 100V</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                High-power modifications for Spintend Ubox VESC FOC controllers. Component-level upgrades pushing rated 150A to 480A per VESC at 100V. Thermal management, trace reinforcement, and MOSFET upgrades.
              </p>
              <div className="text-xs text-muted-foreground">
                Specs: 320% power increase, FOC tuning, thermal profiling, reliability testing
              </div>
            </div>
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">All Downloads on GitHub</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Now located under <a href="https://github.com/DsSoft-Byte" className="text-accent hover:underline">GitHub Downloads</a>. From Firmware blobs, source, iOS Cracking tools, custom Libraries and more.
              </p>
              <div className="text-xs text-muted-foreground">
                Related: iOSBridge, LibCrypto, LayerOne™, FastOTA™
              </div>
            </div>
          </div>

          <div className="mt-6 flex gap-5 items-stretch flex-col lg:flex-row">
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">Ninebot G30 Hyperscooter — 147 km/h</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Modified frame with military-grade 72V 800A battery system. Self-built pack using 21700 EVE 40PL high-discharge cells. ANT 1000A BMS, thermal management, and power delivery architecture.
              </p>
              <div className="text-xs text-muted-foreground">
                Power: 72V 800A discharge • Cells: EVE 40PL 21700 • Top speed: 147 km/h
              </div>
            </div>
            <div className="flex-1 p-7 rounded-xl bg-gradient-to-b from-white/[0.01] to-transparent border border-white/[0.02] hover:border-white/[0.06] transition-all">
              <h4 className="m-0 mb-1.5 font-semibold">Xiaomi Essential Hyperscooter — 120 km/h</h4>
              <p className="text-muted-foreground m-0 text-sm mb-3">
                Performance-tuned platform an 72V 370A battery system. Custom frame reinforcement, advanced thermal profiling, and optimized power electronics for extreme performance.
              </p>
              <div className="text-xs text-muted-foreground">
                Power: 72V 370A discharge • Cells: EVE 50PL 21700 • Top speed: 122 km/h
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer id="contact" className="mt-20 pt-10 pb-15 border-t border-white/[0.04]">
        <div className="max-w-[1100px] mx-auto px-5 flex justify-between items-center flex-col md:flex-row gap-4">
          <div>
            <div className="font-semibold">DsSoft</div>
            <div className="text-muted-foreground text-[13px]">Zurich, Switzerland</div>
          </div>

          <div className="text-muted-foreground text-[13px] text-right">
            <div>© {new Date().getFullYear()} DsSoft — All rights reserved</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
