import { ChangeEvent, FC } from "react";
import { Controller, useForm } from "react-hook-form";
import { Button, FormControl, InputLabel, MenuItem, Paper, Select, TextField } from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import { Catalog } from "./enums";
import { uploadFile } from "../../api/upload";
import useUser from "../../hooks/useUser";
import { IPost } from "../../types/post";

interface AddNewProps {
    handleSubmitPost: (postData: IPost) => void;
}

const AddPost: FC<AddNewProps> = ({ handleSubmitPost }) => {
    const { user } = useUser();
    const { handleSubmit, control, formState, setValue, watch, reset } = useForm<IPost>({
        defaultValues: {
            title: "",
            link: "",
            catalog: "",
            pictureUrl: "",
            description: "",
            price: 0,
        }
    })

    const { pictureUrl } = watch();

    const handleFileUpload = async (event: ChangeEvent<HTMLInputElement>) => {
        const file: File | null = event.target.files?.[0] || null;

        if (!file) {
            console.error('No file selected.');
            return;
        }
        const response = await uploadFile(`/post/${user._id}`, file);

        setValue('pictureUrl', response?.data?.url || '')
    }

    return (
        <Paper className="p-8 border-b-4 border-black">
            <form
                className="flex flex-col gap-1"
                onSubmit={handleSubmit((postData: IPost) => {
                    handleSubmitPost(postData);
                    reset();
                })}
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
                            helperText={formState.errors.title?.message}
                            {...field}
                        />
                    )}
                />
                <div className="flex flex-row gap-4 items-center">
                    <Controller
                        name="link"
                        control={control}
                        defaultValue=""
                        rules={{
                            required: "Link is required",
                            pattern: {
                                value: /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$/i,
                                message: 'Invalid URL',
                            },
                        }}
                        render={({ field }) => (
                            <TextField
                                label="Link"
                                variant="outlined"
                                fullWidth
                                margin="normal"
                                error={!!formState.errors.link}
                                helperText={formState.errors.link?.message}
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
                                        label="Catalog"
                                        error={!!formState.errors.catalog}
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
                                helperText={formState.errors.price?.message}
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
                            helperText={formState.errors.description?.message}
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
                            onChange={handleFileUpload}
                            style={{ display: "none" }}
                        />
                    </Button>

                    <Button type="submit" variant="contained" color="primary">
                        Post
                    </Button>

                </div>
            </form>

            {pictureUrl &&
                <div className="flex my-4">
                    <p>preview:</p>
                    <img src={pictureUrl} alt="Product Image" className="w-[10rem] h-[10rem] p-5" />
                </div>
            }

        </Paper>
    );
};

export default AddPost;
