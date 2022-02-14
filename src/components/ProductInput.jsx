import React from 'react'

export const ProductInput = ({ data, handleData, handleSubmit }) => {
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>Enter title</label>
				<input
					type="text"
					placeholder="Enter Title"
					name="title"
					value={data.title}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>Enter cost</label>
				<input
					type="number"
					placeholder="Enter Cost"
					name="cost"
					value={data.cost}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>Enter image</label>
				<input
					type="text"
					placeholder="Enter image url"
					name="image"
					value={data.image}
					onChange={handleData}
				/>
			</div>
			<div>
				<label>select category</label>
				<select
					name="category"
					value={data.category}
					onChange={handleData}
				>
					<option value="">--</option>
					<option value="vegetables">vegetables</option>
					<option value="fruits">fruits</option>
					<option value="provisions">provisions</option>
				</select>
			</div>
			<div>
				<button>submit</button>
			</div>
		</form>
	);
};
