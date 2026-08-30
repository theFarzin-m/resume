type ProjectDemoProps = {
  desktop: string | undefined;
  phone: string | undefined;
};

export default function ProjectDemo({ desktop, phone }: ProjectDemoProps) {
  return (
    <div className="relative mx-auto max-w-5xl">
      {/* Monitor */}
      <div className="relative mx-auto w-[85%]">
        <div className="rounded-xl border-8 border-zinc-800 bg-zinc-900 p-2 shadow-2xl">
          <div className="aspect-video overflow-hidden rounded-md">
            <video
              src={desktop}
              autoPlay
              loop
              muted
              playsInline
              className="h-full w-full object-cover"
            />
          </div>
        </div>

        {/* Monitor stand */}
        <div className="mx-auto h-12 w-32 bg-zinc-800" />
        <div className="mx-auto h-3 w-52 rounded-full bg-zinc-800" />
      </div>

      {/* Phone */}
      <div className="absolute bottom-0 right-[5%] max-w-33  rounded-4xl border-[6px] border-zinc-900 bg-zinc-900 p-1 shadow-2xl md:w-44">
        <div className="aspect-9/19.5 overflow-hidden rounded-3xl max-h-60">
          <video
            src={phone}
            autoPlay
            loop
            muted
            playsInline
            className="h-full w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
