<template>
    <div>
        <Introduction />
        <Category />
        <Count />
    </div>
</template>

<script>
import Introduction from '@/components/blog/Introduction.vue'
import Category from '@/components/blog/Category.vue'
import Count from '@/components/blog/Count.vue'

export default {
    name: 'Blog',
    components: {
        Introduction,
        Category,
        Count
    }
}
</script>