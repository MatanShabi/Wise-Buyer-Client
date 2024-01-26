import { FC } from "react";
import { Controller, useFormContext } from "react-hook-form";
import { IPost } from ".";
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Catalog } from "./enums";

interface AddNewProps {
    handleSubmitPost: (postData: IPost) => void;
}

const AddPost: FC<AddNewProps> = ({ handleSubmitPost }) => {
    const { handleSubmit, control, formState } = useFormContext<IPost>();

    return (
        <Paper className="p-8 border-b-4 border-black">
            <form
                className="flex flex-col gap-1"
                onSubmit={handleSubmit(handleSubmitPost)}
            >
                <Controller
                    name="title"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Title name is required",
                    }}
                    render={({ field }) => (
                        <TextField
                            label="Title"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            error={!!formState.errors.title}
                            {...field}
                        />
                    )}
                />
                <div className="flex flex-row gap-4 items-center">
                    <Controller
                        name="link"
                        control={control}
                        defaultValue=""
                        render={({ field }) => (
                            <TextField
                                label="Link"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!formState.errors.link}
                                {...field}
                            />
                        )}
                    />
                    <div className="flex w-full pt-2">
                        <Controller
                            name="catalog"
                            control={control}
                            rules={{
                                required: "Catalog name is required",
                            }}
                            render={({ field }) => (
                                <FormControl fullWidth>
                                    <InputLabel>Catalog</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        label="Catalog"

                                        {...field}
                                    >
                                        {Object.values(Catalog).map((catalog) => (
                                            <MenuItem key={catalog} value={catalog}>
                                                {catalog}
                                            </MenuItem>
                                        ))}
                                    </Select>
                                </FormControl>
                            )}
                        />
                    </div>
                    <Controller
                        name="price"
                        control={control}
                        rules={{
                            required: "Price is required",
                        }}
                        render={({ field }) => (
                            <TextField
                                label="Price"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                type="number"
                                error={!!formState.errors.price}
                                {...field}
                            />
                        )}
                    />
                </div>
                <Controller
                    name="description"
                    control={control}
                    defaultValue=""
                    rules={{
                        required: "Description is required",
                    }}
                    render={({ field }) => (
                        <TextField
                            label="Description"
                            variant="outlined"
                            fullWidth
                            margin="normal"
                            multiline
                            rows={4}
                            error={!!formState.errors.description}
                            {...field}
                        />
                    )}
                />
                <div className="flex gap-1">
                    <Button
                        variant="contained"
                        component="label"
                        htmlFor="picture"
                        color="secondary"
                        startIcon={<AddPhotoAlternateIcon />}
                    >
                        Add Picture
                        <input
                            id="picture"
                            name="picture"
                            type="file"
                            style={{ display: "none" }}
                        />
                    </Button>

                    <Button type="submit" variant="contained" color="primary">
                        Post
                    </Button>

                </div>
            </form>
        </Paper>
    );
};

export default AddPost;
