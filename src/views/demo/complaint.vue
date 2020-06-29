<template>
  <basic-container>
    <avue-crud
      :option="option"
      :table-loading="loading"
      :data="data"
      :page="page"
      :before-open="beforeOpen"
      v-model="form"
      ref="crud"
      @row-update="rowUpdate"
      @row-save="rowSave"
      @row-del="rowDel"
      @search-change="searchChange"
      @search-reset="searchReset"
      @selection-change="selectionChange"
      @current-change="currentChange"
      @size-change="sizeChange"
      @refresh-change="refreshChange"
      @on-load="onLoad"
    >
      <template slot="menuLeft">
        <el-button type="danger" size="small" icon="el-icon-delete" plain @click="handleDelete">删 除</el-button>
      </template>
    </avue-crud>
  </basic-container>
</template>

<script>
import { getList, getDetail, add, update, remove } from "@/api/demo/complaint";

export default {
  data() {
    return {
      form: {},
      query: {},
      loading: true,
      page: {
        pageSize: 10,
        currentPage: 1,
        total: 0
      },
      selectionList: [],
      option: {
        height: "auto",
        calcHeight: 30,
        tip: false,
        searchShow: true,
        searchMenuSpan: 6,
        border: true,
        index: true,
        viewBtn: true,
        selection: true,
        dialogClickModal: false,
        column: [
          {
            label: "序号",
            prop: "id",
            rules: [
              {
                required: true,
                message: "请输入序号",
                trigger: "blur"
              }
            ]
          },
          {
            label: "投诉类型",
            prop: "type",
            rules: [
              {
                required: true,
                message: "请输入投诉类型",
                trigger: "blur"
              }
            ]
          },
          {
            label: "投诉对象",
            prop: "obj",
            rules: [
              {
                required: true,
                message: "请输入投诉对象",
                trigger: "blur"
              }
            ]
          },
          {
            label: "投诉对象名称",
            prop: "objName",
            rules: [
              {
                required: true,
                message: "请输入投诉对象名称",
                trigger: "blur"
              }
            ]
          },
          {
            label: "投诉标题",
            prop: "title",
            rules: [
              {
                required: true,
                message: "请输入投诉标题",
                trigger: "blur"
              }
            ]
          },
          {
            label: "投诉内容",
            prop: "content",
            rules: [
              {
                required: true,
                message: "请输入投诉内容",
                trigger: "blur"
              }
            ]
          },
          {
            label: "证明材料",
            prop: "file",
            rules: [
              {
                required: true,
                message: "请输入证明材料",
                trigger: "blur"
              }
            ]
          },
          {
            label: "联系人",
            prop: "contactPerson",
            rules: [
              {
                required: true,
                message: "请输入联系人",
                trigger: "blur"
              }
            ]
          },
          {
            label: "联系方式",
            prop: "phone",
            rules: [
              {
                required: true,
                message: "请输入联系方式",
                trigger: "blur"
              }
            ]
          },
          {
            label: "发表时间",
            prop: "createTime",
            type: "date",
            format: "yyyy-MM-dd hh:mm:ss",
            valueFormat: "yyyy-MM-dd hh:mm:ss",
            rules: [
              {
                required: true,
                message: "请输入发表时间",
                trigger: "blur"
              }
            ]
          },
          {
            label: "点击数",
            prop: "clickNum",
            rules: [
              {
                required: true,
                message: "请输入点击数",
                trigger: "blur"
              }
            ]
          },
          {
            label: "投诉状态",
            prop: "status",
            rules: [
              {
                required: true,
                message: "请输入投诉状态",
                trigger: "blur"
              }
            ]
          },
          {
            label: "所在市",
            prop: "city",
            rules: [
              {
                required: true,
                message: "请输入所在市",
                trigger: "blur"
              }
            ]
          },
          {
            label: "所在区",
            prop: "district",
            rules: [
              {
                required: true,
                message: "请输入所在区",
                trigger: "blur"
              }
            ]
          }
        ]
      },
      data: []
    };
  },
  computed: {
    ids() {
      let ids = [];
      this.selectionList.forEach(ele => {
        ids.push(ele.id);
      });
      return ids.join(",");
    }
  },
  methods: {
    rowSave(row, done, loading) {
      add(row).then(
        () => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          done();
        },
        error => {
          loading();
          window.console.log(error);
        }
      );
    },
    rowUpdate(row, index, done, loading) {
      update(row).then(
        () => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          done();
        },
        error => {
          loading();
          console.log(error);
        }
      );
    },
    rowDel(row) {
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(row.id);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
        });
    },
    handleDelete() {
      if (this.selectionList.length === 0) {
        this.$message.warning("请选择至少一条数据");
        return;
      }
      this.$confirm("确定将选择数据删除?", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          return remove(this.ids);
        })
        .then(() => {
          this.onLoad(this.page);
          this.$message({
            type: "success",
            message: "操作成功!"
          });
          this.$refs.crud.toggleSelection();
        });
    },
    beforeOpen(done, type) {
      if (["edit", "view"].includes(type)) {
        getDetail(this.form.id).then(res => {
          this.form = res.data.data;
        });
      }
      done();
    },
    searchReset() {
      this.query = {};
      this.onLoad(this.page);
    },
    searchChange(params, done) {
      this.query = params;
      this.page.currentPage = 1;
      this.onLoad(this.page, params);
      done();
    },
    selectionChange(list) {
      this.selectionList = list;
    },
    selectionClear() {
      this.selectionList = [];
      this.$refs.crud.toggleSelection();
    },
    currentChange(currentPage) {
      this.page.currentPage = currentPage;
    },
    sizeChange(pageSize) {
      this.page.pageSize = pageSize;
    },
    refreshChange() {
      this.onLoad(this.page, this.query);
    },
    onLoad(page, params = {}) {
      this.loading = true;
      getList(
        page.currentPage,
        page.pageSize,
        Object.assign(params, this.query)
      ).then(res => {
        const data = res.data.data;
        this.page.total = data.total;
        this.data = data.records;
        this.loading = false;
        this.selectionClear();
      });
    }
  }
};
</script>

<style>
</style>
