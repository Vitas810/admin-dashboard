<script>
export default {
  name: 'AuthForm',
};

</script>

<script lang="ts" setup>

</script>

<template>
    <section class="auth">
        <div class="auth-form">
            <h2 class="title text-red-500">Sign In</h2>
            <h3 class="subtitle">Sign in to stay connected.</h3>

            <div class="auth-form__inputs">
                <label for="auth-email">Email</label>
                <input type="email" id="auth-email">

                <label for="auth-password">Password</label>
                <input type="password" id="auth-password">
            </div>

            <div class="auth-form__password">
                <label>
                    Remember me?
                    <input type="checkbox" class="auth-form__remember">
                </label>

                <a href="#" class="auth-form__link">Forgot Password</a>
            </div>

            <button class="auth-form__btn">Sign in</button>

            <div class="auth-form__sign">
                <span class="auth-form__sign-question">or sign in with other accounts?</span>

                <div class="auth-form__social">
                    <button class="auth-form__social-btn">
                        <img src="../../../shared/assets/img/social/Gmail.svg" alt="gmail">
                    </button>
                </div>
            </div>
        </div>

        <div class="auth-bg"></div>
    </section>
</template>

<style lang="scss">
</style>
