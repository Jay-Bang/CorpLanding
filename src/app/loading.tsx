export default function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm z-50">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-4 border-blue-500/30 rounded-full animate-pulse"></div>
                <div className="absolute inset-0 border-4 border-t-blue-500 rounded-full animate-spin"></div>
            </div>
        </div>
    );
}
