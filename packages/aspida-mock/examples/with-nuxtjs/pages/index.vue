<script>
export default {
  async mounted() {
    const { data } = await this.$axios.get('/users/0')
    alert(JSON.stringify(data))
  }
}
</script>
