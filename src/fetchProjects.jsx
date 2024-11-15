import { useState, useEffect } from "react";
import { createClient } from "contentful";

const client = createClient({
	space: "us779yah3nbb",
	environment: "master",
	accessToken: import.meta.env.VITE_API_KEY,
});

export const useFetchProjects = () => {
	const [loading, setLoading] = useState(true);
	const [projects, setProjects] = useState([]);

	const getData = async () => {
		try {
			const response = await client.getEntries({ content_type: "projects" });
			const projects = response.items.map((item) => {
				const { title, url, image } = item.fields;
				const id = item.sys.id;
				const img = image?.fields?.file?.url;
				return { title, url, id, img };
			});
			setProjects(projects);
			setLoading(false);
		} catch (error) {
			console.log(error);
			setLoading(false);
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		getData();
	}, []);
	return { loading, projects };
};
