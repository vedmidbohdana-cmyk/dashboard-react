export default function ProfileCard({ period, setPeriod }) {
    return (
        <div className="profile-card">
            <div className="profile-top">
                <img src="/dashboard-react/assets/avatar-femail.png" alt="avatar" />
                <div>
                    <p className="title">Report for</p>
                    <h2>Bohdana Vedmid</h2>
                </div>
            </div>

            <div className="profile-bottom">
                <a
                    href="#"
                    className={period === "daily" ? "active" : ""}
                    onClick={() => setPeriod("daily")}
                >
                    Daily
                </a>

                <a
                    href="#"
                    className={period === "weekly" ? "active" : ""}
                    onClick={() => setPeriod("weekly")}
                >
                    Weekly
                </a>
            </div>
        </div>
    );
}
