import React, { Props, useState, useEffect } from "react";

import api from "../../services/api";

import "./styles.css";

import DataGrid, {
  Column,
  Pager,
  Paging,
  SearchPanel,
  HeaderFilter,
  FilterRow,
} from "devextreme-react/data-grid";

const pageSizes = [10, 25, 50, 100];

export default function TableUrls() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    api.get("urls").then((response) => {
      setUrls(response.data);
    });
  }, []);

  return (
    <div className="table">
      <DataGrid
        dataSource={urls}
        allowColumnReordering={true}
        showBorders={true}
      >
        <SearchPanel visible={true} highlightCaseSensitive={true} />
        <FilterRow visible={true} />
        <HeaderFilter visible={true} />
        <Column caption="Id" dataField="id" dataType="string" width="10%" />
        <Column caption="Url" dataField="url" dataType="string" width="45%" />
        <Column
          caption="Created at"
          dataField="created_at"
          dataType="date"
          width="45%"
        />

        <Pager
          allowedPageSizes={pageSizes}
          showPageSizeSelector={true}
          showInfo={true}
        />
        <Paging defaultPageSize={10} />
      </DataGrid>
    </div>
  );
}
