import styles from "../../styles/welocome.module.scss";
const Welcome = () => {
	return (
		<div className={styles.blackBackground}>
			<div className={styles.redBackGround}>
				<img
					className={styles.background}
					src='Background.png'
					alt='backgound'
				/>
				<img
					className={styles.backgroundm}
					src='Backgroundm.png'
					alt='backgound red curve'
				/>
				<div className={styles.container}>
					<h1 className={styles.heading}>Offer Cashback at Checkout</h1>
					<p className={styles.description}>
						Engage consumers through credit card cashback rewards activation at
						checkout.
					</p>
					<div>
						<div className={styles.actionButton}>Request a Demo</div>
					</div>
					<img className={styles.laptop} src='Screen.png' alt='webpage view' />
					<h1 className={styles.feature}>FEATURES</h1>
					<p className={styles.description2}>
						Realtime cashback rewards and activation syncing between merchant
						and credit card issuers.
					</p>
					<div className={styles.features}>
						<img className={styles.snipet} src='codesnipet.png' alt='snipet' />
						<div className={styles.points}>
							<div className={styles.point}>
								<div className={styles.top}>
									<img src='redcart.svg' alt='icon' />
									<h2>Prevent Cart Abandonment</h2>
								</div>
								<p className={styles.bottom}>
									Help your customer offset total cost through cashback rewards
									info during checkout.
								</p>
							</div>
							<div className={styles.point}>
								<div className={styles.top}>
									<img src='infinite.svg' alt='icon' />
									<h2>Automated Syncing</h2>
								</div>
								<p className={styles.bottom}>
									Realtime syncing between your platform and credit card
									issuer’s database.
								</p>
							</div>
							<div className={styles.point}>
								<div className={styles.top}>
									<img src='switch.svg' alt='icon' />
									<h2>Frictionless Activation</h2>
								</div>
								<p className={styles.bottom}>
									Works with any checkout system, wallet or payment gateway.
								</p>
							</div>
						</div>
					</div>
					<div className={styles.footer}>
						<div className={styles.title}>
							<h1>Subscribe to our newsletter</h1>
						</div>

						<div className={styles.inputs}>
							<input
								type='text'
								placeholder='Enter Your Adress Email                              '
							/>
							<div className={styles.button}>Submit</div>
						</div>
						<div className={styles.socials}>
							<img src='twiteer.svg' alt='social icon' />
							<img src='fb.svg' alt='social icon' />
							<img src='linkedin.svg' alt='social icon' />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Welcome;
