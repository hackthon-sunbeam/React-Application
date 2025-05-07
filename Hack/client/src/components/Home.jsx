import { Link } from "react-router";

const Home = () => {
	return (
		<div>
			<h1>Online Book Shop - Home</h1>
			<p>
				Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum fugiat
				fugit unde quam harum non? Facere ad reprehenderit repellat eius modi,
				quia voluptatibus quas voluptate sit ipsa animi voluptatem ut dolor eum!
				Nihil vitae esse qui delectus ipsa, debitis facilis accusamus velit
				voluptates neque quos corrupti praesentium? Iure cum repudiandae
				expedita quae odit commodi. Deserunt vitae nam repudiandae dolore
				impedit sit rem numquam ducimus?
			</p>
			<Link className="btn btn-primary" to="/login">
				Login Here
			</Link>
		</div>
	);
};

export default Home;
