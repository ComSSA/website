<script>
const redirects = {
    grillthedepartment: "https://forms.gle/dJqPdR6KaBC3aNQd8",
    feedback: "https://forms.gle/R5o4wq9Q2djaLGSx6",
    suggestions: "https://forms.gle/pEA8MzaRAnABjN5f6",
    gamesnight: "https://forms.gle/TDSxErAEp4gutKRv7",
    tfti: "https://docs.google.com/forms/d/e/1FAIpQLScZJV6aveaVS2LOtPR-N5GUyXkCBmgvLTqb_DWGGeXjH0Zr7g/viewform"
}

export default {
    asyncData ({ redirect, error, params }) {
        const path = params.pathMatch.replace("/", "")
        if (path in redirects) {
            // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/307
            return redirect(307, redirects[path])
        }

        return error({ statusCode: 404 })
    }
}
</script>
