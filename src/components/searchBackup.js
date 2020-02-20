let keyCount = 0;
		// We need to get each row and store it in an array
		var rowsTitle = [];
		var search = [];
		var searchterm = this.props.searchTerm; // need this or it doesnt work
		var key = "";
		this.props.data.forEach(function (row) {
			if (
				row.title.toLowerCase().indexOf(searchterm.toLowerCase()) ===
				-1 &&
				row.tags.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
			)
				return;

			// need to grab the correct match
			if (
				row.title.toLowerCase().indexOf(searchterm.toLowerCase()) === -1
			) {
				var m = row.tags.toLowerCase().split(" ");
				for (var i in m)
					if (m[i].indexOf(searchterm.toLowerCase()) !== -1)
						key = m[i];
			} else {
				key = row.title.toLowerCase();
			}

			rowsTitle.push(<TableTitle title={row.title} />);
			if (searchterm != "") rowsTitle.push(<SearchMatch match={key} />);
			rowsTitle.push(<TableData data={row.content} />);
		});

		// Then render all. Render using childs. Send them prop.title and prop.data
		return (<div className="whole-div" key={keyCount+=1}>{rowsTitle}</div>);
