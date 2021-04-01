<template>
  <div class="TableCss">
    <div class="TableCss-wrap">
      <div class="TableHeader">
        <b>信息价</b>
        <b style="color: #909399; cursor: pointer">查看其它期次信息价>></b>
      </div>
      <div style="display:flex;justify-content: space-between;align-items: flex-end;padding:10px 0 24px">
        <div class="TableMessage">
          <span>深圳2020年12月信息价 > ></span>
        </div>
        <div>适用时间：2021.01.01-2021.02.01</div>
      </div>
      <div class="TableSelect">
        <div class="seach-wrap">
          <div>
            <span>材料名称：</span>
            <el-select v-model="value" placeholder="请选择" size="mini">
              <el-option v-for="item in materialsName" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <div>
            <span>国际分类：</span>
            <el-select v-model="specificationValue" placeholder="请选择" size="mini">
              <el-option v-for="item in Specification" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </div>
          <el-button class="seach-btn" type="primary" size="mini">搜索</el-button>
        </div>
      </div>
      <el-table :data="tableData" border style="width: 100%" max-height="349" :row-style="{'font-size': '12px' }">
        <el-table-column prop="id" label="序号"></el-table-column>
        <el-table-column prop="name" label="材料名称"></el-table-column>
        <el-table-column prop="specification" label="规格"> </el-table-column>
        <el-table-column prop="unit" label="单位"></el-table-column>
        <el-table-column prop="besidesPrice" label="信息价（除税价）">
        </el-table-column>
        <el-table-column prop="containPrice" label="信息价（含税价）"></el-table-column>
        <el-table-column prop="tendency" label="信息价趋势">
          <img :src="tendency" alt="" style="width:15px">
        </el-table-column>
      </el-table>
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="currentPage4" :page-size="pageSize" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "tableDate",
  data() {
    return {
      tendency: require("@/assets/img/trend.png"),
      specificationValue: "",
      value: "",
      pageSize: 10,
      total: 100,
      currentPage4: 1,
      tableData: [],
      materialsName: [],
      Specification: [],
    };
  },
  methods: {
    handleSizeChange(val) {
      this.currentPage4 = 1;
      this.pageSize = val;
      this.TableDatas();
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      this.currentPage4 = val;
      this.TableDatas();
      console.log(`当前页: ${val}`);
    },
    TableDatas() {
      this.tableData = [];

      let _total = 0;
      for (let i = 0; i < this.total; i++) {
        let _obj = {
          id: i,
          name: "圆钢",
          specification: "HPB300Φ10mm以内",
          unit: "t",
          besidesPrice: "4739.10",
          containPrice: "4193.89",
        };
        if (
          _total > this.pageSize * (this.currentPage4 - 1) &&
          _total <= this.pageSize * this.currentPage4
        ) {
          this.tableData.push(_obj);
        }
        let materialsValue = {
          label: _obj.name,
          value: i,
        };
        let SpecificationValue = {
          label: _obj.specification,
          value: i,
        };

        if (this.materialsName.length !== 0) {
          this.materialsName.forEach((res) => {
            if (res.label !== _obj.name) {
              this.materialsName.push(materialsValue);
            }
          });
        } else {
          this.materialsName.push(materialsValue);
        }

        if (this.Specification.length !== 0) {
          this.Specification.forEach((res) => {
            if (res.label !== _obj.specification) {
              this.Specification.push(SpecificationValue);
            }
          });
        } else {
          this.Specification.push(SpecificationValue);
        }
        _total = _total + 1;
      }
    },
  },
  mounted() {
    this.TableDatas();
  },
};
</script>

<style>
.seach-btn {
  width: 204px;
}
.TableCss {
  width: 1360px;
  margin: 0 auto;
  border: 1px solid #eee;
}
.TableHeader {
  display: flex;
  justify-content: space-between;
  padding: 24px 0;
}
.TableCss-wrap {
  /* padding: 15px 0; */
  padding: 15px;
}
.TableMessage {
  width: 302;
  height: 44px;
  padding: 4px 20px;
  border-radius: 6px;
  border: 1px solid #00bfff;
  color: #00bfff;
  cursor: pointer;
  font-size: 18px;
  line-height: 44px;
}
.seach-wrap{
  width: 884px;
  display: flex;
  justify-content: space-around;
}
.TableSelect {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #e2eff8;
  /* padding: 5px 0; */
  margin-bottom: 10px;
  height: 64px;
}
.TableCss .el-table th {
  text-align: center;
  color: #000;
}
.TableCss .el-table td {
  text-align: center;
  padding: 3px 0;
  color: #000;
}
.TableCss .el-pagination {
  display: flex;
  justify-content: center;
  margin: 10px 0;
}
</style>