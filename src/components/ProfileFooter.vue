<template>
  <div class="footer">
    <div class="tab">
      <ul>
        <li>
          <CustomText tag="a" size="small" href>HAKKINDA</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>YARDIM</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>BASIN</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>API</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>İŞ FIRSATLARI</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>GİZLİLİK</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>KOŞULLAR</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>KONUMLAR</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>BAŞLICA HESAPLAR</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>KONU ETİKETLERİ</CustomText>
        </li>
        <li>
          <CustomText tag="a" size="small" href>DİL</CustomText>
        </li>
      </ul>
    </div>
    <div class="info">
      <CustomText tag="p" size="small">© 2020 INSTAGRAM FROM FACEBOOK</CustomText>
    </div>
  </div>
</template>

<script>
import CustomText from "@/components/CustomText";
export default {
  name: "ProfileFooter",
  components: {
    CustomText
  }
};
</script>

<style lang="scss" scoped>
.footer {
  padding: 38px 0;
  .tab {
    ul {
      display: flex;
      margin-bottom: 7px;
      li {
        list-style: none;
        margin-right: 16px;
        color: rgba(var(--fe0), 1);
        font-weight: 600;
      }
    }
  }
  .info {
    p {
      color: rgba(var(--f52), 1);
      font-weight: 600;
    }
  }
}
@media screen and (max-width: 680px) {
  .footer {
    padding: 15px 0;
    .tab {
      ul {
        display: block;
        max-width: 330px;
        margin: 0 auto;
        margin-bottom: 7px;
        text-align: center;
        li {
          display: inline-block;
          margin-right: 10px;
        }
      }
    }
    .info {
      text-align: center;
      p {
        margin-bottom: 45px;
      }
    }
  }
}
</style>