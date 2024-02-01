import "./ScrollDownIndicator.css";

export function ScrollDownIndicator() {
    return(
        <div className="scroll-down-indicator">
            <div className="scroll-down-container">
                <div className="scroll-down-arrows">
                    <svg className="arrows" viewBox="0 0 60 72" width="100%">
                        <path className="a1" d="M0 0 L30 32 L60 0"></path>
                        <path className="a2" d="M0 20 L30 52 L60 20"></path>
                        <path className="a3" d="M0 40 L30 72 L60 40"></path>
                    </svg>
                </div>
            </div>
        </div>
    );
}
