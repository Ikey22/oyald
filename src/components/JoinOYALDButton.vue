<template>
    <b-dropdown
        :text="$store.state.language === 'en' ? 'join OYALD' : 'Adhérer à OJLAD'"
        variant="warning"
      >
        <b-dropdown-item to="/membership">{{ $store.state.language === 'en' ? 'As a member' : 'En tant que membre' }}</b-dropdown-item>
        <b-dropdown-item to="/partnership">{{ $store.state.language === 'en' ? 'As a Partner' : 'En tant que partnenaire' }}</b-dropdown-item>
    </b-dropdown>
</template>

<script>
export default {
    name: "JoinOYALDButton"
}
</script>