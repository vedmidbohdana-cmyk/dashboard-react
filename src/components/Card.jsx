export default function Card({ item, period }) {
    const className = item.title.toLowerCase().replace(" ", "");

    const current = item.timeframes[period].current;
    const previous = item.timeframes[period].previous;

    return (
        <div className={`card ${className}`}>
            <div className="card-header"></div>

            <div className="card-content">
                <div className="item">
                    <h3>{item.title}</h3>

                    <svg
                        fill="#bbc0ff"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 448 512"
                    >
                        <path d="M0 256a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm168 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm224-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z" />
                    </svg>
                </div>

                <div className="time-data">
                    <h1>{current}hrs</h1>

                    <p>
                        {period === "daily" ? "Yesterday" : "Last Week"} - {previous}hrs
                    </p>
                </div>
            </div>
        </div>
    );
}
