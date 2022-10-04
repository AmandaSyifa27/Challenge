const Card3 = () => {
    return (
        <strong>
            <div className="contain-card-3">
                <div className="card3">
                    <div className="article-card-3">
                        <h1>Sewa Mobil di (Lokasimu) Sekarang</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                        <button onClick={(e) => {e.preventDefault(window.location.href="/search")}}><strong>Mulai Sewa Mobil</strong></button>
                    </div>
                </div>
            </div>
        </strong>
    );
};

export default Card3;