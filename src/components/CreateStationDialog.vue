<template>
    <v-dialog v-model="dialogCreate" fullscreen transition="dialog-bottom-transition" :overlay="false">
        <v-btn color="primary" dark slot="activator" @click.stop="dialogCreate = true" >Créer</v-btn>

        <v-card>
            <v-toolbar dark color="primary">
                <v-toolbar-title >Créer un nouvel arrêt</v-toolbar-title>
                <v-spacer></v-spacer>
                    <v-btn dark flat @click.native="dialogCreate = false">
                        <v-icon>close</v-icon>
                    </v-btn>
            </v-toolbar>

            <v-container id="create-station" fill-height>
                <v-layout row wrap>
                    <v-flex xs6>
                        <v-layout row wrap align-center>

                            <!-- CHAMP NOM STATION -->
                            <v-flex xs8>
                                <v-container title>Informations générales:</v-container>
                                <v-text-field label="Nom de la station"></v-text-field> 
                                <v-text-field label="Adresse de la station"></v-text-field>
                                <v-text-field name="input-1-3" label="Informations sur la station" class="coordonnees-info"></v-text-field><br>
                                
                                <v-container title prepend-icon="place">Les coordonnées:</v-container>
                                <v-text-field name="input-1-3" label="Longitude" ></v-text-field>
                                <v-text-field name="input-1-3" label="Latitude"></v-text-field>
                                
                                <v-btn small fab dark color="black">
                                    <v-icon dark>add</v-icon>
                                </v-btn>

                            </v-flex>
                        </v-layout>

                    </v-flex>



                    <v-flex xs6>
                        <v-layout row wrap align-center>
                            <!-- CHAMP MAP -->
                            <v-flex xs12 class="map">
                                <google-map name="creatStation" class="google-map"></google-map>
                            </v-flex>

                            <!-- CHAMP BUTTONS -->
                            <v-flex xs12 align-center>
                                <v-container class="buttons" align-center>
                                    <v-btn>Annuler</v-btn>
                                    <v-btn>Ajouter</v-btn>
                                </v-container>
                            </v-flex>
                        </v-layout>
                        <v-layout>
                        </v-layout>
                    </v-flex>

                </v-layout>

            </v-container>

        </v-card>
    </v-dialog>
</template>



<script>
    /*  eslint-disable */
    import MapSection from "../components/MapSection";

    export default {
        name: "creatStation",
        components: {
            "google-map": MapSection
            // put custom components here
        },
        data() {
            return {
                dialogCreate: false
            };
        },
        mounted() {},
        methods: {}
    };
</script>

<style lang="scss" scoped>
    #create-station {
        position: relative;
        margin: auto;
        width: 80%;
        max-width: 100%;
        display: flex;
        color: black;
    }

    .push_down {
        margin-bottom: 30px;
    }

    .push_up {
        margin-top: 30px;
    }

    .map {
        overflow: hidden;
        position: relative;
        padding: 0;
        margin: 20px;
        width: 200px;
        height: 500px;
        border: 1px solid black;
        margin-top: 60px;

        .google-map {
            position: relative;
            width: 100%;
            height: 100%;
        }
    }

    .buttons {
        text-align: center;
    }

    .coordonnees-info {
        margin-top: 0px;
    }
</style>