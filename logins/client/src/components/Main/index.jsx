import styles from "./styles.module.css";
import "./bootstrap.min.css";

const Main = () => {
	const handleLogout = () => {
		localStorage.removeItem("token");
		window.location.reload();
	};

	return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
				<h1>WELCOME TO PRACHAAR</h1>
				<button className={styles.white_btn} onClick={handleLogout}>
					Logout
				</button>
			</nav>
			<h1  className={styles.new}>Welcome back user!</h1>
			{/* <button >Navigate to Home Page</button> */}
			<div className={styles.new}>
				<a href="http://127.0.0.1:5501/index.html">  <button type="button" class="btn btn-danger">Navigate to Home Page</button></a>

</div>

		</div>
		

  

		
	);
};

export default Main;
