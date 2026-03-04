import React from "react";
import {
  AbsoluteFill,
  Img,
  interpolate,
  spring,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";

// --- Existing UI building blocks (kept) ---

const ChipIcon: React.FC<{ variant: "green" | "blue" }> = ({ variant }) => {
  if (variant === "green") {
    return (
      <div
        style={{
          width: 18,
          height: 18,
          borderRadius: 5,
          background: "#E9F9EE",
          position: "relative",
          boxShadow: "inset 0 0 0 2px #20C65A",
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 4,
            top: 5,
            width: 9,
            height: 2,
            borderRadius: 2,
            background: "#20C65A",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 4,
            top: 9,
            width: 7,
            height: 2,
            borderRadius: 2,
            background: "#20C65A",
            opacity: 0.9,
          }}
        />
      </div>
    );
  }

  return (
    <div
      style={{
        width: 18,
        height: 18,
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 2,
          top: 10,
          width: 12,
          height: 4,
          background: "#2F7BFF",
          borderRadius: 3,
          transform: "rotate(-35deg)",
          transformOrigin: "left center",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 10,
          top: 2,
          width: 7,
          height: 7,
          borderRadius: 7,
          border: "2px solid #2F7BFF",
          background: "transparent",
          transform: "rotate(-35deg)",
        }}
      />
      <div
        style={{
          position: "absolute",
          left: 14,
          top: 5.8,
          width: 3,
          height: 3,
          borderRadius: 3,
          background: "#F7F2E6",
          transform: "rotate(-35deg)",
        }}
      />
    </div>
  );
};

const Chip: React.FC<{
  label: string;
  icon: "green" | "blue";
}> = ({ label, icon }) => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px",
        borderRadius: 999,
        background: "rgba(255,255,255,0.88)",
        boxShadow: "0 1px 0 rgba(0,0,0,0.05)",
        border: "1px solid rgba(0,0,0,0.04)",
        color: "#1f2a2e",
        fontSize: 22,
        lineHeight: 1,
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
        whiteSpace: "nowrap",
      }}
    >
      <ChipIcon variant={icon} />
      <div style={{ marginTop: -1 }}>{label}</div>
    </div>
  );
};

const SmallPillButton: React.FC<{ label: string }> = ({ label }) => {
  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 10,
        padding: "10px 18px",
        borderRadius: 999,
        background: "#F7F8FA",
        border: "1px solid #E6E8EE",
        color: "#172026",
        fontSize: 22,
        fontWeight: 600,
        boxShadow: "0 1px 0 rgba(0,0,0,0.03)",
      }}
    >
      <div
        style={{
          width: 22,
          height: 22,
          position: "relative",
          opacity: 0.75,
        }}
      >
        <div
          style={{
            position: "absolute",
            left: 2,
            top: 2,
            width: 14,
            height: 12,
            borderRadius: 3,
            border: "2px solid #2A2F36",
            background: "transparent",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 7,
            top: 14,
            width: 12,
            height: 2,
            borderRadius: 2,
            background: "#2A2F36",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 12,
            top: 9,
            width: 2,
            height: 12,
            borderRadius: 2,
            background: "#2A2F36",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 6,
            top: 6,
            width: 2,
            height: 2,
            borderRadius: 2,
            background: "#2A2F36",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 10,
            top: 6,
            width: 2,
            height: 2,
            borderRadius: 2,
            background: "#2A2F36",
          }}
        />
      </div>
      {label}
    </div>
  );
};

const PaperclipIcon = () => (
  <div style={{ width: 28, height: 28, position: "relative", opacity: 0.7 }}>
    <div
      style={{
        position: "absolute",
        left: 10,
        top: 3,
        width: 10,
        height: 18,
        borderRadius: 9,
        border: "2px solid #4E5661",
        transform: "rotate(10deg)",
        background: "transparent",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 8,
        top: 7,
        width: 10,
        height: 16,
        borderRadius: 9,
        border: "2px solid #4E5661",
        transform: "rotate(10deg)",
        background: "transparent",
        clipPath: "inset(0 0 0 50%)",
      }}
    />
  </div>
);

const MicIcon = () => (
  <div style={{ width: 28, height: 28, position: "relative", opacity: 0.7 }}>
    <div
      style={{
        position: "absolute",
        left: 10,
        top: 4,
        width: 8,
        height: 14,
        borderRadius: 6,
        border: "2px solid #4E5661",
        background: "transparent",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 8,
        top: 16,
        width: 12,
        height: 8,
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10,
        border: "2px solid #4E5661",
        borderTop: "none",
        background: "transparent",
      }}
    />
    <div
      style={{
        position: "absolute",
        left: 13,
        top: 22,
        width: 2,
        height: 4,
        background: "#4E5661",
        borderRadius: 2,
      }}
    />
  </div>
);

const SendButton = () => (
  <div
    style={{
      width: 58,
      height: 58,
      borderRadius: 999,
      background: "#9EB9FF",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow: "0 2px 0 rgba(0,0,0,0.05)",
    }}
  >
    <div
      style={{
        width: 0,
        height: 0,
        borderLeft: "10px solid transparent",
        borderRight: "10px solid transparent",
        borderBottom: "18px solid white",
        transform: "translateY(-2px)",
        position: "relative",
      }}
    />
    <div
      style={{
        position: "absolute",
        width: 4,
        height: 18,
        background: "white",
        borderRadius: 4,
        transform: "translateY(6px)",
      }}
    />
  </div>
);

// --- Animation layer using the attached label image ---

const FloatingLabel: React.FC<{
  src: string;
  inFrame: number;
  x: number;
  y: number;
  scale?: number;
}> = ({ src, inFrame, x, y, scale = 1 }) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const t = Math.max(0, frame - inFrame);

  const pop = spring({
    frame: t,
    fps,
    config: {
      damping: 14,
      stiffness: 240,
      mass: 0.8,
    },
  });

  const drift = interpolate(t, [0, 120], [0, -10], {
    extrapolateRight: "clamp",
  });

  const bob = Math.sin((t / fps) * Math.PI * 2 * 0.55) * 3; // ~0.55Hz

  const opacity = interpolate(t, [0, 8], [0, 1], {
    extrapolateRight: "clamp",
  });

  const s = (0.86 + 0.14 * pop) * scale;

  return (
    <div
      style={{
        position: "absolute",
        left: x,
        top: y,
        transform: `translateY(${drift + bob}px) scale(${s})`,
        transformOrigin: "left top",
        opacity,
        filter:
          "drop-shadow(0px 14px 24px rgba(0,0,0,0.14)) drop-shadow(0px 2px 0px rgba(0,0,0,0.06))",
        willChange: "transform, opacity",
        pointerEvents: "none",
      }}
    >
      <Img
        src={src}
        style={{
          display: "block",
          width: 310,
          height: "auto",
        }}
      />
    </div>
  );
};

// Note: AttachedImages is available at runtime (per user request).
declare const AttachedImages: string[];

export const HelpPromptScreenshot: React.FC = () => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();

  const intro = spring({
    frame,
    fps,
    config: { damping: 16, stiffness: 140, mass: 0.9 },
  });

  const titleOpacity = interpolate(frame, [0, 10], [0, 1], {
    extrapolateRight: "clamp",
  });

  const titleY = interpolate(intro, [0, 1], [18, 0]);

  const cardIn = spring({
    frame: frame - 8,
    fps,
    config: { damping: 18, stiffness: 160, mass: 0.9 },
  });

  const cardOpacity = interpolate(frame, [8, 18], [0, 1], {
    extrapolateRight: "clamp",
  });

  const cardY = interpolate(cardIn, [0, 1], [24, 0]);
  const cardScale = interpolate(cardIn, [0, 1], [0.985, 1]);

  const chipsIn = spring({
    frame: frame - 18,
    fps,
    config: { damping: 20, stiffness: 180, mass: 1 },
  });

  const chipsOpacity = interpolate(frame, [18, 30], [0, 1], {
    extrapolateRight: "clamp",
  });

  const chipsY = interpolate(chipsIn, [0, 1], [18, 0]);

  const bgPulse = 1 + Math.sin((frame / fps) * Math.PI * 2 * 0.08) * 0.012;

  return (
    <AbsoluteFill
      style={{
        width: 1920,
        height: 989,
        background:
          "radial-gradient(1200px 600px at 70% 65%, rgba(255,231,160,0.55), rgba(255,231,160,0.0) 55%), radial-gradient(900px 500px at 25% 45%, rgba(255,216,156,0.35), rgba(255,216,156,0.0) 58%), linear-gradient(180deg, #FAF1E2, #F8F1E8)",
        fontFamily:
          'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, "Apple Color Emoji","Segoe UI Emoji"',
        transform: `scale(${bgPulse})`,
        transformOrigin: "center center",
      }}
    >
      <div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 270,
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 56,
            fontWeight: 700,
            color: "#172026",
            letterSpacing: -0.8,
            marginBottom: 28,
            opacity: titleOpacity,
            transform: `translateY(${titleY}px)`,
          }}
        >
          How can I help?
        </div>

        <div
          style={{
            width: 1320,
            height: 196,
            background: "#FFFFFF",
            borderRadius: 22,
            border: "2px solid rgba(0,0,0,0.10)",
            boxShadow: "0 10px 18px rgba(0,0,0,0.10)",
            position: "relative",
            opacity: cardOpacity,
            transform: `translateY(${cardY}px) scale(${cardScale})`,
          }}
        >
          <div
            style={{
              position: "absolute",
              left: 34,
              top: 26,
              fontSize: 28,
              color: "#6B7280",
              fontWeight: 500,
            }}
          >
            Build an agent or perform a task
          </div>

          <div style={{ position: "absolute", left: 30, top: 106 }}>
            <SmallPillButton label="Build apps" />
          </div>

          <div
            style={{
              position: "absolute",
              right: 162,
              top: 104,
              display: "flex",
              alignItems: "center",
              gap: 22,
            }}
          >
            <PaperclipIcon />
            <MicIcon />
          </div>

          <div style={{ position: "absolute", right: 34, top: 92 }}>
            <SendButton />
          </div>
        </div>

        <div
          style={{
            marginTop: 38,
            width: 1320,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 18,
            opacity: chipsOpacity,
            transform: `translateY(${chipsY}px)`,
          }}
        >
          <div style={{ display: "flex", gap: 26 }}>
            <Chip label="Personal website" icon="green" />
            <Chip label="Customer support email" icon="blue" />
            <Chip label="Outbound sales calls" icon="blue" />
            <Chip label="Lead gen" icon="green" />
          </div>
          <div style={{ display: "flex", gap: 26 }}>
            <Chip label="Meeting recorder" icon="blue" />
            <Chip label="LinkedIn outreach" icon="green" />
            <Chip label="Support chatbot" icon="blue" />
          </div>
        </div>
      </div>

      {/* Animated label overlay (from attached image) */}
      <FloatingLabel
        src={AttachedImages[0]}
        inFrame={22}
        x={1180}
        y={210}
        scale={1}
      />
    </AbsoluteFill>
  );
};