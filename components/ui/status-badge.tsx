export default function StatusBadge({ label }: { label: string }) {
    return (
        <span className="inline-block align-middle text-xs font-semibold uppercase tracking-wide px-2.5 py-0.5 border border-white/30 rounded-full text-gray-300 ml-2">
            {label}
        </span>
    );
}
