export default function SectionHeading({
  index,
  title,
  command,
}: {
  index: string;
  title: string;
  command: string;
}) {
  return (
    <div className="mb-10 flex items-baseline gap-3">
      <span className="font-mono text-xs text-muted">{index}</span>
      <h2 className="text-2xl font-semibold tracking-tight text-foreground">
        {title}
      </h2>
      <span className="hidden font-mono text-xs text-muted/70 sm:inline">
        <span className="text-accent">$</span> {command}
      </span>
      <div className="h-px flex-1 bg-surface-border" />
    </div>
  );
}
